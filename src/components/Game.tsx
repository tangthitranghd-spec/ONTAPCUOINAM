import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { questions, Question } from '../data/questions';
import { soundManager } from './SoundManager';
import confetti from 'canvas-confetti';
import { 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Trophy, 
  RotateCcw, 
  Brain, 
  Timer, 
  Star,
  ChevronRight,
  HelpCircle
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Game() {
  const [gameState, setGameState] = useState<'start' | 'playing' | 'finished'>('start');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; message: string } | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [startTime, setStartTime] = useState<number>(0);
  const [totalTime, setTotalTime] = useState<number>(0);

  const currentQuestion = questions[currentIndex];

  const startGame = () => {
    soundManager.playClick();
    setGameState('playing');
    setCurrentIndex(0);
    setScore(0);
    setFeedback(null);
    setShowExplanation(false);
    setStartTime(Date.now());
  };

  const handleAnswer = (answer: string | boolean) => {
    if (feedback) return;

    const isCorrect = String(answer).toLowerCase().trim() === String(currentQuestion.answer).toLowerCase().trim();
    
    if (isCorrect) {
      setScore(prev => prev + 10);
      soundManager.playCorrect();
      setFeedback({ isCorrect: true, message: 'Chính xác! Tuyệt vời!' });
    } else {
      soundManager.playWrong();
      setFeedback({ isCorrect: false, message: `Chưa đúng rồi. Đáp án là: ${currentQuestion.answer}` });
    }
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    soundManager.playClick();
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setFeedback(null);
      setUserAnswer('');
      setShowExplanation(false);
    } else {
      finishGame();
    }
  };

  const finishGame = () => {
    setGameState('finished');
    setTotalTime(Math.floor((Date.now() - startTime) / 1000));
    soundManager.playComplete();
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#4ade80', '#3b82f6', '#f59e0b', '#ef4444']
    });
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (gameState === 'start') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh] text-center p-6">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-3xl shadow-2xl p-10 max-w-2xl w-full border-4 border-blue-100"
        >
          <div className="bg-blue-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Brain className="w-12 h-12 text-blue-600" />
          </div>
          <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">
            TOÁN 5: ÔN TẬP CUỐI NĂM
          </h1>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed">
            Chào mừng các em đến với đấu trường tri thức! Hãy cùng ôn tập lại các kiến thức quan trọng của năm học lớp 5 qua 30 thử thách thú vị nhé.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <div className="bg-green-50 p-4 rounded-xl border border-green-100">
              <Star className="w-6 h-6 text-green-600 mx-auto mb-2" />
              <p className="text-sm font-bold text-green-800">30 Câu hỏi</p>
              <p className="text-xs text-green-600">Đa dạng nội dung</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
              <Trophy className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <p className="text-sm font-bold text-blue-800">10 Điểm / Câu</p>
              <p className="text-xs text-blue-600">Cố gắng đạt 300!</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
              <Timer className="w-6 h-6 text-purple-600 mx-auto mb-2" />
              <p className="text-sm font-bold text-purple-800">3 Cấp độ</p>
              <p className="text-xs text-purple-600">Dễ - Trung bình - Khó</p>
            </div>
          </div>

          <button 
            onClick={startGame}
            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-blue-600 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-blue-700 w-full md:w-auto"
          >
            BẮT ĐẦU NGAY
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    );
  }

  if (gameState === 'finished') {
    const percentage = (score / (questions.length * 10)) * 100;
    let rank = "Cố gắng hơn nhé!";
    if (percentage >= 90) rank = "Xuất sắc! Bạn là thiên tài Toán học!";
    else if (percentage >= 70) rank = "Rất tốt! Bạn nắm vững kiến thức rồi đấy.";
    else if (percentage >= 50) rank = "Khá tốt! Hãy ôn tập thêm một chút nhé.";

    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh] p-6">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white rounded-3xl shadow-2xl p-10 max-w-2xl w-full text-center border-4 border-yellow-100"
        >
          <div className="relative inline-block mb-6">
            <Trophy className="w-24 h-24 text-yellow-500 mx-auto" />
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full"
            >
              HOÀN THÀNH
            </motion.div>
          </div>
          
          <h2 className="text-3xl font-black text-slate-900 mb-2">KẾT QUẢ CUỐI CÙNG</h2>
          <p className="text-xl font-bold text-blue-600 mb-6">{rank}</p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-slate-50 p-6 rounded-2xl">
              <p className="text-slate-500 text-sm uppercase tracking-wider font-bold mb-1">Tổng điểm</p>
              <p className="text-4xl font-black text-slate-900">{score}</p>
              <p className="text-slate-400 text-xs">trên {questions.length * 10}</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl">
              <p className="text-slate-500 text-sm uppercase tracking-wider font-bold mb-1">Thời gian</p>
              <p className="text-4xl font-black text-slate-900">{formatTime(totalTime)}</p>
              <p className="text-slate-400 text-xs">phút : giây</p>
            </div>
          </div>

          <button 
            onClick={startGame}
            className="flex items-center justify-center gap-2 w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors"
          >
            <RotateCcw className="w-5 h-5" />
            CHƠI LẠI
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6">
      {/* Header Info */}
      <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100 flex items-center gap-2">
            <span className="text-slate-400 font-bold text-sm">CÂU</span>
            <span className="text-blue-600 font-black text-lg">{currentIndex + 1}</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-400 font-bold text-sm">{questions.length}</span>
          </div>
          <div className={cn(
            "px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest",
            currentQuestion.level === 'easy' ? "bg-green-100 text-green-700" :
            currentQuestion.level === 'medium' ? "bg-yellow-100 text-yellow-700" :
            "bg-red-100 text-red-700"
          )}>
            {currentQuestion.level === 'easy' ? 'Dễ' : currentQuestion.level === 'medium' ? 'Trung bình' : 'Khó'}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-yellow-400 px-4 py-2 rounded-full shadow-md flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-900 fill-yellow-900" />
            <span className="text-yellow-900 font-black text-lg">{score}</span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-200 h-3 rounded-full mb-8 overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          className="bg-blue-500 h-full"
        />
      </div>

      {/* Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -20, opacity: 0 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100"
        >
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-blue-100 text-blue-700 text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-tighter">
                {currentQuestion.category}
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 leading-tight mb-8">
              {currentQuestion.content}
            </h3>

            {/* Answer Section */}
            <div className="space-y-4">
              {currentQuestion.type === 'multiple-choice' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentQuestion.options?.map((option, idx) => (
                    <button
                      key={idx}
                      disabled={!!feedback}
                      onClick={() => handleAnswer(option)}
                      className={cn(
                        "p-5 text-left rounded-2xl border-2 transition-all duration-200 font-bold text-lg",
                        feedback 
                          ? option === currentQuestion.answer 
                            ? "bg-green-50 border-green-500 text-green-700" 
                            : "bg-slate-50 border-slate-200 text-slate-400"
                          : "bg-white border-slate-100 hover:border-blue-500 hover:bg-blue-50 text-slate-700"
                      )}
                    >
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 text-slate-500 mr-3 text-sm">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      {option}
                    </button>
                  ))}
                </div>
              )}

              {currentQuestion.type === 'true-false' && (
                <div className="grid grid-cols-2 gap-6">
                  {[true, false].map((val) => (
                    <button
                      key={val ? 'true' : 'false'}
                      disabled={!!feedback}
                      onClick={() => handleAnswer(val)}
                      className={cn(
                        "p-8 rounded-2xl border-2 transition-all font-black text-xl flex flex-col items-center gap-3",
                        feedback
                          ? val === currentQuestion.answer
                            ? "bg-green-50 border-green-500 text-green-700"
                            : "bg-slate-50 border-slate-200 text-slate-400"
                          : val 
                            ? "bg-white border-slate-100 hover:border-green-500 hover:bg-green-50 text-green-600"
                            : "bg-white border-slate-100 hover:border-red-500 hover:bg-red-50 text-red-600"
                      )}
                    >
                      {val ? <CheckCircle2 className="w-10 h-10" /> : <XCircle className="w-10 h-10" />}
                      {val ? 'ĐÚNG' : 'SAI'}
                    </button>
                  ))}
                </div>
              )}

              {(currentQuestion.type === 'short-answer' || currentQuestion.type === 'fill-in-the-blank') && (
                <div className="flex flex-col gap-4">
                  <input 
                    type="text"
                    value={userAnswer}
                    disabled={!!feedback}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    placeholder="Nhập câu trả lời của bạn..."
                    className="w-full p-5 rounded-2xl border-2 border-slate-200 focus:border-blue-500 outline-none text-xl font-bold"
                    onKeyDown={(e) => e.key === 'Enter' && userAnswer && handleAnswer(userAnswer)}
                  />
                  {!feedback && (
                    <button
                      onClick={() => handleAnswer(userAnswer)}
                      disabled={!userAnswer}
                      className="py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 disabled:opacity-50 transition-all"
                    >
                      KIỂM TRA
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Feedback & Explanation */}
            <AnimatePresence>
              {feedback && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  className={cn(
                    "mt-8 p-6 rounded-2xl border-l-8",
                    feedback.isCorrect ? "bg-green-50 border-green-500" : "bg-red-50 border-red-500"
                  )}
                >
                  <div className="flex items-start gap-4">
                    {feedback.isCorrect ? (
                      <CheckCircle2 className="w-8 h-8 text-green-600 shrink-0" />
                    ) : (
                      <XCircle className="w-8 h-8 text-red-600 shrink-0" />
                    )}
                    <div>
                      <h4 className={cn(
                        "text-lg font-black mb-1",
                        feedback.isCorrect ? "text-green-800" : "text-red-800"
                      )}>
                        {feedback.message}
                      </h4>
                      <div className="text-slate-600 text-sm leading-relaxed mt-2 p-3 bg-white/50 rounded-lg border border-slate-200/50">
                        <div className="flex items-center gap-1 font-bold text-slate-700 mb-1">
                          <HelpCircle className="w-4 h-4" /> Giải thích:
                        </div>
                        {currentQuestion.explanation}
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={nextQuestion}
                    className="mt-6 flex items-center justify-center gap-2 w-full py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all"
                  >
                    {currentIndex < questions.length - 1 ? 'CÂU TIẾP THEO' : 'XEM KẾT QUẢ'}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Footer Info */}
      <div className="mt-8 text-center text-slate-400 text-sm font-medium">
        Ôn tập Toán 5 - Bộ sách Kết nối tri thức với cuộc sống
      </div>
    </div>
  );
}
