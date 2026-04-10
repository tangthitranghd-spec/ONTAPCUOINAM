import Game from './components/Game';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      <header className="py-6 px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm border border-slate-200 mb-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Học tập vui vẻ</span>
        </div>
      </header>
      
      <main className="container mx-auto pb-20">
        <Game />
      </main>

      <footer className="fixed bottom-0 left-0 right-0 py-4 px-6 bg-white/80 backdrop-blur-md border-t border-slate-100 flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest z-50">
        <div>© 2026 Giáo dục Tiểu học</div>
        <div className="flex items-center gap-4">
          <span>Toán Lớp 5</span>
          <span className="h-3 w-px bg-slate-200"></span>
          <span>Kết nối tri thức</span>
        </div>
      </footer>
    </div>
  );
}
