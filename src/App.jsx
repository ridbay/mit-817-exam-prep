import React, { useState, useMemo, useEffect } from "react";
import {
  BookOpen,
  Layers,
  HelpCircle,
  CheckCircle,
  XCircle,
  ArrowRight,
  ArrowLeft,
  Search,
  Star,
  Info,
  ChevronDown,
  Award,
  Book,
  Terminal,
  Code,
  Zap,
  RotateCcw,
  Trophy,
  Flame,
  Cpu,
} from "lucide-react";

import { studyGuide, flashcards, quizzes, theoryBank, groupProjectBank } from "./data";

const ALL_QUESTIONS = [...quizzes].map((q, idx) => ({
  ...q,
  id: idx + 1,
  correct: { A: 0, B: 1, C: 2, D: 3 }[q.answer],
}));

// --- MAIN APP COMPONENT ---

const App = () => {
  // --- PERSISTENCE LOGIC ---
  const [activeTab, setActiveTab] = useState(
    () => localStorage.getItem("activeTab") || "home",
  );
  const [currentCardIdx, setCurrentCardIdx] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [userAnswer, setUserAnswer] = useState(null);
  const [quizFinished, setQuizFinished] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocusMode, setIsFocusMode] = useState(false);
  const [theorySearchQuery, setTheorySearchQuery] = useState("");
  const [projectSearchQuery, setProjectSearchQuery] = useState("");

  // Filter & Shuffle States
  const [quizTopicFilter, setQuizTopicFilter] = useState("All");
  const [quizDifficultyFilter, setQuizDifficultyFilter] = useState("All");
  const [isShuffled, setIsShuffled] = useState(false);

  // Persistence State
  const [masteredModules, setMasteredModules] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("masteredModules")) || [];
    } catch {
      return [];
    }
  });
  const [totalQuestionsAnswered, setTotalQuestionsAnswered] = useState(
    () => parseInt(localStorage.getItem("totalQuestions")) || 0,
  );
  const [quizHistory, setQuizHistory] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("quizHistory")) || [];
    } catch {
      return [];
    }
  });

  // Filtered Questions
  const filteredQuestions = useMemo(() => {
    let qs = ALL_QUESTIONS.filter(
      (q) =>
        (quizTopicFilter === "All" || q.topic === quizTopicFilter) &&
        (quizDifficultyFilter === "All" ||
          q.difficulty === quizDifficultyFilter),
    );
    if (isShuffled) {
      return [...qs].sort(() => Math.random() - 0.5);
    }
    return qs;
  }, [quizTopicFilter, quizDifficultyFilter, isShuffled]);

  const uniqueTopics = useMemo(
    () => ["All", ...new Set(ALL_QUESTIONS.map((q) => q.topic))],
    [ALL_QUESTIONS],
  );

  // Sync with LocalStorage
  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
    localStorage.setItem("masteredModules", JSON.stringify(masteredModules));
    localStorage.setItem("totalQuestions", totalQuestionsAnswered.toString());
    localStorage.setItem("quizHistory", JSON.stringify(quizHistory));
  }, [activeTab, masteredModules, totalQuestionsAnswered, quizHistory]);

  const toggleModuleMastery = (idx) => {
    setMasteredModules((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx],
    );
  };

  const submitAnswer = (idx) => {
    if (showAnswer) return;
    setUserAnswer(idx);
    setShowAnswer(true);
    setTotalQuestionsAnswered((p) => p + 1);
    if (idx === filteredQuestions[currentQuestionIdx].correct)
      setQuizScore((s) => s + 1);
  };

  const nextQuestion = () => {
    if (currentQuestionIdx < filteredQuestions.length - 1) {
      setCurrentQuestionIdx((prev) => prev + 1);
      setShowAnswer(false);
      setUserAnswer(null);
    } else {
      setQuizFinished(true);
      setIsFocusMode(false);
      const newScore = {
        date: new Date().toLocaleDateString(),
        score: quizScore,
        total: filteredQuestions.length,
        percent: Math.round((quizScore / filteredQuestions.length) * 100),
      };
      setQuizHistory((prev) => [newScore, ...prev].slice(0, 5));
    }
  };

  const masteryPercent = Math.round(
    ((masteredModules.length * 5 + Math.min(totalQuestionsAnswered, 500) / 10) /
      100) *
      100,
  );

  const SidebarItem = ({ id, icon: Icon, label, count }) => (
    <button
      onClick={() => {
        setActiveTab(id);
        setQuizStarted(false);
        setQuizFinished(false);
        setIsFocusMode(false);
      }}
      className={`flex items-center space-x-4 w-full p-4 rounded-2xl transition-all duration-300 group ${
        activeTab === id
          ? "border border-indigo-500/50 bg-indigo-500/10 shadow-[inset_0_0_20px_rgba(99,102,241,0.1)]"
          : "text-gray-400 hover:text-white hover:bg-white/5"
      }`}
    >
      <div
        className={`p-2 rounded-xl transition-all duration-500 ${activeTab === id ? "bg-indigo-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.5)]" : "bg-white/5 group-hover:bg-white/10"}`}
      >
        <Icon size={18} />
      </div>
      <div className="flex-1 text-left">
        <span className="font-bold block text-sm tracking-tight">{label}</span>
        {count && (
          <span className="text-[10px] opacity-50 font-medium uppercase tracking-wider">
            {count}
          </span>
        )}
      </div>
    </button>
  );

  return (
    <div className="flex h-screen bg-black text-white font-sans overflow-hidden relative">
      <div className="mesh-bg" />

      {/* Mobile Header - Visible only on small screens */}
      {!isFocusMode && (
        <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/5 p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-2 rounded-xl">
              <Terminal size={18} className="text-white" />
            </div>
            <h4 className="text-sm font-black tracking-tighter">
              MIT 817 BY RIDBAY
            </h4>
          </div>
          <div className="bg-white/5 px-3 py-1 rounded-full border border-white/10">
            <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">
              {masteryPercent}% Mastery
            </span>
          </div>
        </header>
      )}

      {/* Sidebar - Desktop Only */}
      {!isFocusMode && (
        <aside className="w-80 bg-black/40 backdrop-blur-3xl border-r border-white/5 p-8 hidden md:flex flex-col relative z-20">
          <div className="mb-12 flex items-center space-x-4">
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-3 rounded-2xl shadow-lg shadow-indigo-500/20">
              <Terminal size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tighter leading-none">
                MIT 817
              </h1>
              <p className="text-[10px] uppercase tracking-[0.3em] text-indigo-400 font-bold mt-1">
                By Ridbay
              </p>
            </div>
          </div>

          <nav className="space-y-2 flex-1">
            <SidebarItem id="home" icon={Layers} label="Command Center" />
            <SidebarItem
              id="study"
              icon={BookOpen}
              label="Theory Modules"
              count="10 Units"
            />
            <SidebarItem
              id="flashcards"
              icon={Zap}
              label="Active Recall"
              count={`${flashcards.length} Cards`}
            />
            <SidebarItem
              id="quiz"
              icon={HelpCircle}
              label="Exam Simulator"
              count={`${ALL_QUESTIONS.length} Items`}
            />
            <SidebarItem
              id="theory-bank"
              icon={Award}
              label="Theory Bank"
              count={`${theoryBank.length} Questions`}
            />
            <SidebarItem
              id="project-lab"
              icon={Cpu}
              label="Project Lab"
              count={`${groupProjectBank.length} Items`}
            />
          </nav>

          <div className="p-6 rounded-[2rem] border border-white/10 relative overflow-hidden group bg-white/5">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Award size={64} />
            </div>
            <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-4">
              Current Mastery
            </p>
            <div className="flex items-end space-x-2 mb-3">
              <span className="text-3xl font-black leading-none">
                {masteryPercent}%
              </span>
              <span className="text-xs text-gray-500 mb-1">
                Rank:{" "}
                {masteryPercent > 80
                  ? "Elite"
                  : masteryPercent > 50
                    ? "Veteran"
                    : "Novice"}
              </span>
            </div>
            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 shadow-[0_0_10px_rgba(99,102,241,0.5)] transition-all duration-1000"
                style={{ width: `${masteryPercent}%` }}
              ></div>
            </div>
          </div>
        </aside>
      )}

      {/* Main Content */}
      <main
        className={`flex-1 overflow-y-auto relative z-10 px-4 pt-24 pb-32 md:p-12 transition-all duration-500 ${isFocusMode ? "bg-black/80 backdrop-blur-xl pt-12 pb-12" : ""}`}
      >
        {/* DASHBOARD */}
        {activeTab === "home" && (
          <div className="max-w-6xl mx-auto space-y-12">
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-2">
                <span className="text-indigo-400 font-black text-xs uppercase tracking-[0.4em]">
                  Academic Suite
                </span>
                <h2 className="text-3xl md:text-5xl font-black leading-tight">
                  Welcome to the <br />
                  <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    Excellence Hub
                  </span>
                </h2>
              </div>
              <div className="px-6 py-4 rounded-2xl flex items-center space-x-4 border border-white/10 bg-white/5">
                <div className="text-right">
                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                    Exam Countdown
                  </p>
                  <p className="font-black text-xl">1 Day Study Sprint</p>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <Star
                  className="text-yellow-400"
                  size={24}
                  fill="currentColor"
                />
              </div>
            </header>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[auto] md:auto-rows-[12rem]">
              <div
                onClick={() => setActiveTab("study")}
                className="md:col-span-8 p-6 md:p-10 rounded-3xl md:rounded-[2.5rem] flex flex-col justify-end cursor-pointer group relative overflow-hidden bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-all min-h-[16rem] md:min-h-0"
              >
                <div className="absolute top-10 right-10 text-white/5 group-hover:text-indigo-500/10 transition-colors">
                  <BookOpen size={160} />
                </div>
                <div className="relative z-10 space-y-2">
                  <h3 className="text-3xl font-black">Theory Mastery</h3>
                  <p className="text-gray-400 max-w-md">
                    Deep dive into 10 structured modules covering the entire
                    Software Engineering lifecycle.
                  </p>
                  <button className="mt-4 flex items-center space-x-2 text-indigo-400 font-bold group-hover:translate-x-2 transition-transform">
                    <span>Access Guide</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>

              <div
                onClick={() => setActiveTab("flashcards")}
                className="md:col-span-4 p-6 md:p-10 rounded-3xl md:rounded-[2.5rem] flex flex-col justify-between cursor-pointer border border-white/10 bg-white/5 group hover:border-indigo-500/50 transition-all min-h-[12rem] md:min-h-0"
              >
                <Zap
                  className="text-yellow-400 group-hover:scale-110 transition-transform"
                  size={48}
                />
                <div className="space-y-1">
                  <h3 className="text-2xl font-black">Active Recall</h3>
                  <p className="text-gray-400 text-sm">
                    {flashcards.length} Drills Loaded
                  </p>
                </div>
              </div>

              <div
                onClick={() => setActiveTab("quiz")}
                className="md:col-span-4 p-6 md:p-10 rounded-3xl md:rounded-[2.5rem] flex flex-col justify-between cursor-pointer border border-white/10 bg-white/5 group hover:border-emerald-500/50 transition-all min-h-[12rem] md:min-h-0"
              >
                <HelpCircle
                  className="text-emerald-400 group-hover:scale-110 transition-transform"
                  size={48}
                />
                <div className="space-y-1">
                  <h3 className="text-2xl font-black">Exam Engine</h3>
                  <p className="text-gray-400 text-sm">
                    {ALL_QUESTIONS.length} Questions
                  </p>
                </div>
              </div>

              <div
                onClick={() => setActiveTab("theory-bank")}
                className="md:col-span-4 p-6 md:p-10 rounded-3xl md:rounded-[2.5rem] flex flex-col justify-between cursor-pointer border border-white/10 bg-white/5 group hover:border-purple-500/50 transition-all min-h-[12rem] md:min-h-0"
              >
                <Award
                  className="text-purple-400 group-hover:scale-110 transition-transform"
                  size={48}
                />
                <div className="space-y-1">
                  <h3 className="text-2xl font-black">Theory Bank</h3>
                  <p className="text-gray-400 text-sm">
                    {theoryBank.length} Detail Models
                  </p>
                </div>
              </div>

              <div
                onClick={() => setActiveTab("project-lab")}
                className="md:col-span-4 p-6 md:p-10 rounded-3xl md:rounded-[2.5rem] flex flex-col justify-between cursor-pointer border border-white/10 bg-white/5 group hover:border-emerald-500/50 transition-all min-h-[12rem] md:min-h-0"
              >
                <Cpu
                  className="text-emerald-400 group-hover:scale-110 transition-transform"
                  size={48}
                />
                <div className="space-y-1">
                  <h3 className="text-2xl font-black">Project Lab</h3>
                  <p className="text-gray-400 text-sm">
                     Group 4 Case Study
                  </p>
                </div>
              </div>

              <div className="md:col-span-8 p-6 md:p-10 rounded-3xl md:rounded-[2.5rem] bg-gradient-to-br from-indigo-600 to-purple-900 relative overflow-hidden flex items-center shadow-2xl min-h-[16rem] md:min-h-0">
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 10% 20%, rgba(0,0,0,0.5) 0%, transparent 100%)",
                  }}
                />
                <div className="relative z-10 w-full flex flex-col md:flex-row items-center gap-10">
                  <div className="bg-white/10 p-6 rounded-[2rem] backdrop-blur-md border border-white/10">
                    <Award size={64} className="text-white" />
                  </div>
                  <div className="space-y-4 text-center md:text-left">
                    <h3 className="text-3xl font-black leading-tight">
                      Elite Performance Protocol
                    </h3>
                    <p className="text-indigo-100/80 leading-relaxed max-w-lg">
                      Spaced repetition and active recall improve memory
                      retention by up to 300%. Optimize your sessions today.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STUDY GUIDE */}
        {activeTab === "study" && (
          <div className="max-w-5xl mx-auto space-y-12">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-4">
              <div className="space-y-2">
                <span className="text-indigo-400 font-black text-xs uppercase tracking-[0.4em]">
                  Theory Guide
                </span>
                <h2 className="text-4xl font-black">Study Modules</h2>
              </div>
              <div className="relative flex-1 md:max-w-md">
                <Search
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-white/30"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search architecture, agile, requirements..."
                  className="w-full pl-14 pr-8 py-5 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-indigo-500/50 focus:bg-white/10 outline-none transition-all placeholder:text-white/20"
                  onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
                />
              </div>
            </header>

            <div className="grid grid-cols-1 gap-6">
              {studyGuide
                .filter(
                  (m) =>
                    m.title.toLowerCase().includes(searchQuery) ||
                    m.topic.toLowerCase().includes(searchQuery),
                )
                .map((m, idx) => (
                  <details
                    key={idx}
                    className="group bg-white/5 rounded-[2rem] overflow-hidden border border-white/5 transition-all"
                  >
                    <summary className="p-6 md:p-10 font-black cursor-pointer list-none hover:bg-white/10 flex flex-col md:flex-row items-start md:items-center justify-between transition-all gap-6">
                      <div className="flex items-center space-x-6 md:space-x-8">
                        <span className="text-3xl md:text-5xl font-black text-white/5 translate-y-1">
                          0{idx + 1}
                        </span>
                        <div>
                          <p className="text-[10px] uppercase font-bold text-indigo-400 tracking-[0.2em] mb-1">
                            {m.topic}
                          </p>
                          <h4 className="text-xl md:text-2xl text-white group-hover:text-indigo-300 transition-colors">
                            {m.title}
                          </h4>
                        </div>
                      </div>
                      <div className="flex items-center justify-between w-full md:w-auto md:space-x-6">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            toggleModuleMastery(idx);
                          }}
                          className={`px-4 py-2 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest border transition-all ${masteredModules.includes(idx) ? "bg-emerald-500 border-emerald-400 text-white" : "border-white/10 text-white/30 hover:text-white hover:border-white/20"}`}
                        >
                          {masteredModules.includes(idx)
                            ? "Mastered"
                            : "Mark as Done"}
                        </button>
                        <div className="p-2 md:p-3 bg-white/5 rounded-full group-open:rotate-180 transition-transform">
                          <ChevronDown className="text-gray-400" size={16} />
                        </div>
                      </div>
                    </summary>
                    <div className="p-6 md:p-12 pt-0 space-y-12 border-t border-white/5">
                      <p className="text-gray-300 leading-relaxed text-xl md:text-2xl font-medium max-w-4xl">
                        {m.overview}
                      </p>

                      <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-8">
                          <div className="space-y-6">
                            <h4 className="font-black text-white flex items-center uppercase text-xs tracking-[0.3em] opacity-50">
                              <Star
                                size={16}
                                className="mr-3 text-yellow-400"
                                fill="currentColor"
                              />{" "}
                              Core Concepts
                            </h4>
                            <div className="grid gap-4">
                              {m.subtopics.map(([title, desc], i) => (
                                <div
                                  key={i}
                                  className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-white/10 transition-colors group/item relative"
                                >
                                  <strong className="block text-lg text-indigo-200 group-hover/item:text-white transition-colors">
                                    {title}
                                  </strong>
                                  <span className="text-sm text-gray-400 mt-2 block leading-relaxed">
                                    {desc}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="space-y-8">
                          <div className="bg-emerald-500/5 p-8 rounded-[2.5rem] border border-emerald-500/10 backdrop-blur-md">
                            <h4 className="font-black text-emerald-400 flex items-center mb-6 uppercase text-[10px] tracking-[0.3em]">
                              <Zap size={18} className="mr-3" /> Exam Focus Tip
                            </h4>
                            <p className="text-emerald-100/90 font-medium leading-relaxed italic text-lg">
                              "{m.exam_tip}"
                            </p>
                          </div>

                          <div className="bg-rose-500/5 p-8 rounded-[2.5rem] border border-rose-500/10">
                            <h4 className="font-black text-rose-400 flex items-center mb-6 uppercase text-[10px] tracking-[0.3em]">
                              <XCircle size={18} className="mr-3" /> Common trap
                            </h4>
                            <p className="text-rose-100/80 leading-relaxed">
                              {m.common_trap}
                            </p>
                          </div>
                        </div>
                      </div>

                      {m.example && (
                        <div className="p-6 md:p-10 bg-white/5 rounded-3xl md:rounded-[2.5rem] border border-white/10">
                          <h4 className="font-black text-gray-400 mb-6 uppercase text-[10px] tracking-[0.3em] flex items-center">
                            <Terminal size={14} className="mr-3" /> Real-World
                            Case Study
                          </h4>
                          <div className="text-gray-300 text-base md:text-lg leading-relaxed whitespace-pre-line font-medium italic border-l-2 border-indigo-500/30 pl-6">
                            {m.example}
                          </div>
                        </div>
                      )}

                      {m.mastery_insight && (
                        <div className="p-6 md:p-10 bg-rose-500/5 rounded-3xl md:rounded-[2.5rem] border border-rose-500/20 relative overflow-hidden group">
                          <div className="absolute top-0 right-0 p-8 text-rose-500/10 group-hover:text-rose-500/20 transition-colors">
                            <Flame size={80} />
                          </div>
                          <h4 className="font-black text-rose-400 mb-6 uppercase text-[10px] tracking-[0.3em] flex items-center">
                            <Flame size={14} className="mr-3" /> Exam Mastery
                            Insight
                          </h4>
                          <div className="text-rose-100/90 text-base md:text-lg leading-relaxed whitespace-pre-line font-medium relative z-10">
                            {m.mastery_insight}
                          </div>
                        </div>
                      )}

                      <div className="p-6 md:p-10 bg-indigo-500/5 rounded-3xl md:rounded-[2.5rem] border border-indigo-500/10">
                        <h4 className="font-black text-indigo-400 mb-4 uppercase text-[10px] tracking-[0.3em]">
                          Module Synthesis
                        </h4>
                        <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                          {m.summary}
                        </p>
                      </div>
                    </div>
                  </details>
                ))}
            </div>
          </div>
        )}

        {/* FLASHCARDS */}
        {activeTab === "flashcards" && (
          <div className="max-w-4xl mx-auto flex flex-col items-center py-6 md:py-12">
            <header className="text-center mb-10 md:mb-20 space-y-4">
              <span className="text-indigo-400 font-black text-xs uppercase tracking-[0.4em]">
                Neural Drill
              </span>
              <h2 className="text-3xl md:text-5xl font-black">Memory Forge</h2>
              <p className="text-gray-500 text-base md:text-lg max-w-lg mx-auto">
                Master vocabulary through high-frequency active recall.
              </p>
            </header>

            <div
              onClick={() => setIsFlipped(!isFlipped)}
              className="w-full max-w-2xl aspect-[1.2/1] md:aspect-[1.618/1] perspective-1000 cursor-pointer group"
            >
              <div
                className={`relative w-full h-full card-inner preserve-3d transition-transform duration-700 ${isFlipped ? "rotate-y-180" : ""}`}
              >
                {/* Front */}
                <div className="absolute inset-0 bg-white/5 rounded-3xl md:rounded-[3.5rem] p-8 md:p-16 flex flex-col items-center justify-center backface-hidden border border-white/10 text-center shadow-2xl overflow-hidden">
                  <div className="absolute top-8 md:top-12 left-1/2 -translate-x-1/2 px-4 md:px-6 py-2 bg-indigo-500/10 text-indigo-400 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest border border-indigo-500/20 whitespace-nowrap">
                    {flashcards[currentCardIdx].topic}
                  </div>
                  <h3 className="text-2xl md:text-4xl font-black text-white leading-tight">
                    {flashcards[currentCardIdx].front}
                  </h3>
                  <div className="mt-8 md:mt-16 py-3 px-6 md:px-8 bg-white/5 rounded-full text-[8px] md:text-[10px] font-black text-gray-500 uppercase tracking-[0.4em] opacity-0 group-hover:opacity-100 transition-opacity">
                    Scan for Definition
                  </div>
                  <div className="absolute bottom-4 md:bottom-8 text-white/5 font-black text-6xl md:text-8xl pointer-events-none">
                    {currentCardIdx + 1}
                  </div>
                </div>
                {/* Back */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 to-purple-900 rounded-3xl md:rounded-[3.5rem] p-8 md:p-16 flex flex-col items-center justify-center backface-hidden rotate-y-180 text-center shadow-2xl border border-white/20">
                  <span className="text-[10px] font-black text-indigo-100 uppercase tracking-[0.5em] mb-8 md:mb-12 opacity-60">
                    Insight Reveal
                  </span>
                  <p className="text-xl md:text-3xl font-bold leading-relaxed max-w-md text-white">
                    {flashcards[currentCardIdx].back}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 md:mt-20 flex items-center space-x-8 md:space-x-12">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlipped(false);
                  setCurrentCardIdx(
                    (p) => (p - 1 + flashcards.length) % flashcards.length,
                  );
                }}
                className="p-6 md:p-8 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 text-indigo-400 transition-all hover:scale-110 active:scale-95 group"
              >
                <ArrowLeft size={24} />
              </button>
              <div className="text-lg md:text-xl font-bold font-mono tracking-widest text-white/20">
                <span className="text-white">{currentCardIdx + 1}</span> /{" "}
                {flashcards.length}
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlipped(false);
                  setCurrentCardIdx((p) => (p + 1) % flashcards.length);
                }}
                className="p-6 md:p-8 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 text-indigo-400 transition-all hover:scale-110 active:scale-95 group"
              >
                <ArrowRight size={24} />
              </button>
            </div>
          </div>
        )}

        {/* PROJECT LAB */}
        {activeTab === "project-lab" && (
          <div className="max-w-5xl mx-auto space-y-12">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-4">
              <div className="space-y-2">
                <span className="text-emerald-400 font-black text-xs uppercase tracking-[0.4em]">
                  Case Study Integration
                </span>
                <h2 className="text-4xl font-black uppercase leading-tight">
                  Group 4: Digital Academic Records Portal for Managing Undergraduate and Postgraduate Academic Records
                </h2>
              </div>
              <div className="relative flex-1 md:max-w-md">
                <Search
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-white/30"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search project requirements, roles..."
                  className="w-full pl-14 pr-8 py-5 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-emerald-500/50 focus:bg-white/10 outline-none transition-all placeholder:text-white/20"
                  onChange={(e) =>
                    setProjectSearchQuery(e.target.value.toLowerCase())
                  }
                />
              </div>
            </header>

            <div className="grid grid-cols-1 gap-8">
              {groupProjectBank
                .filter(
                  (p) =>
                    p.title.toLowerCase().includes(projectSearchQuery) ||
                    p.details.toLowerCase().includes(projectSearchQuery),
                )
                .map((p, idx) => (
                  <div
                    key={idx}
                    className="group bg-white/5 rounded-[2.5rem] border border-white/5 hover:border-emerald-500/30 transition-all overflow-hidden"
                  >
                    <div className="p-8 md:p-12 space-y-8">
                      <div className="flex items-start space-x-6">
                        <span className="text-4xl font-black text-white/10 translate-y-1">
                          {p.id.padStart(2, "0")}
                        </span>
                        <h3 className="text-xl md:text-3xl font-black text-white group-hover:text-emerald-300 transition-colors leading-tight">
                          {p.title}
                        </h3>
                      </div>

                      <div className="grid grid-cols-1 gap-8">
                        <div className="bg-white/[0.02] p-8 md:p-10 rounded-3xl border border-white/5 space-y-6">
                          <p className="text-gray-300 text-lg md:text-xl leading-relaxed whitespace-pre-line font-medium">
                            {p.details}
                          </p>
                        </div>

                        {p.highlight && (
                          <div className="bg-emerald-500/5 p-8 md:p-10 rounded-3xl border border-emerald-500/10 space-y-4">
                            <div className="flex items-center space-x-2 text-emerald-400 font-black text-[10px] uppercase tracking-widest">
                              <Info size={14} />
                              <span>Critical Exam Insight</span>
                            </div>
                            <p className="text-emerald-100/80 text-lg md:text-xl italic font-bold">
                              {p.highlight}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* THEORY BANK */}
        {activeTab === "theory-bank" && (
          <div className="max-w-5xl mx-auto space-y-12">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-4">
              <div className="space-y-2">
                <span className="text-purple-400 font-black text-xs uppercase tracking-[0.4em]">
                  Distinction Level Bank
                </span>
                <h2 className="text-4xl font-black">Written Exam Models</h2>
              </div>
              <div className="relative flex-1 md:max-w-md">
                <Search
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-white/30"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search theory, definitions, comparison..."
                  className="w-full pl-14 pr-8 py-5 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-purple-500/50 focus:bg-white/10 outline-none transition-all placeholder:text-white/20"
                  onChange={(e) =>
                    setTheorySearchQuery(e.target.value.toLowerCase())
                  }
                />
              </div>
            </header>

            <div className="grid grid-cols-1 gap-8">
              {theoryBank
                .filter(
                  (t) =>
                    t.question.toLowerCase().includes(theorySearchQuery) ||
                    t.answer.toLowerCase().includes(theorySearchQuery),
                )
                .map((t, idx) => (
                  <div
                    key={idx}
                    className="group bg-white/5 rounded-[2.5rem] border border-white/5 hover:border-purple-500/30 transition-all overflow-hidden"
                  >
                    <div className="p-8 md:p-12 space-y-8">
                      <div className="flex items-start justify-between gap-6">
                        <div className="flex items-start space-x-6">
                          <span className="text-4xl font-black text-white/10 translate-y-1">
                            {t.id.padStart(2, "0")}
                          </span>
                          <h3 className="text-xl md:text-3xl font-black text-white group-hover:text-purple-300 transition-colors leading-tight">
                            {t.question}
                          </h3>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-8">
                        <div className="bg-white/[0.02] p-8 md:p-10 rounded-3xl border border-white/5 space-y-6">
                          <h4 className="flex items-center text-[10px] uppercase font-black tracking-[0.3em] text-emerald-400">
                            <CheckCircle size={14} className="mr-3" /> Model
                            Answer
                          </h4>
                          <p className="text-gray-300 text-lg md:text-xl leading-relaxed whitespace-pre-line font-medium">
                            {t.answer}
                          </p>
                        </div>

                        {t.example && (
                          <div className="bg-purple-500/5 p-8 md:p-10 rounded-3xl border border-purple-500/10 space-y-6">
                            <h4 className="flex items-center text-[10px] uppercase font-black tracking-[0.3em] text-purple-400">
                              <Terminal size={14} className="mr-3" /> Concrete
                              Example
                            </h4>
                            <p className="text-purple-100/80 text-lg md:text-xl italic font-medium">
                              {t.example}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* QUIZ TAB */}
        {activeTab === "quiz" && (
          <div className="max-w-4xl mx-auto py-12">
            {!quizStarted ? (
              <div className="space-y-12 text-center reveal-up">
                <header className="space-y-4">
                  <span className="text-emerald-400 font-black text-xs uppercase tracking-[0.4em]">
                    Combat Protocol
                  </span>
                  <h2 className="text-5xl font-black">Exam Simulator</h2>
                  <p className="text-gray-500 text-lg max-w-lg mx-auto">
                    High-stakes simulation using {ALL_QUESTIONS.length}{" "}
                    validated items.
                  </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                  <div className="p-8 bg-white/5 rounded-3xl border border-white/10 space-y-6 text-left hover:border-indigo-500/30 transition-all">
                    <h4 className="font-bold text-sm uppercase tracking-widest text-indigo-400">
                      Configure Session
                    </h4>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-black text-gray-500 tracking-wider">
                          Target Domain
                        </label>
                        <select
                          value={quizTopicFilter}
                          onChange={(e) => setQuizTopicFilter(e.target.value)}
                          className="w-full bg-black/60 border border-white/10 rounded-xl p-3 outline-none focus:ring-1 focus:ring-indigo-500 text-sm"
                        >
                          {uniqueTopics.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                        <span className="text-sm font-bold">
                          Randomize Sequence
                        </span>
                        <button
                          onClick={() => setIsShuffled(!isShuffled)}
                          className={`w-12 h-6 rounded-full transition-all relative ${isShuffled ? "bg-indigo-500" : "bg-white/10"}`}
                        >
                          <div
                            className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${isShuffled ? "right-1" : "left-1"}`}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 bg-gradient-to-br from-indigo-500/10 to-purple-900/20 rounded-3xl border border-white/10 flex flex-col justify-between">
                    <div className="space-y-2">
                      <h4 className="font-bold text-sm uppercase tracking-widest text-white/50 italic">
                        Session Intelligence
                      </h4>
                      <div className="flex justify-between items-end">
                        <span className="text-4xl font-black">
                          {filteredQuestions.length}
                        </span>
                        <span className="text-xs text-indigo-400 font-bold mb-1">
                          Questions Loaded
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setQuizStarted(true);
                        setCurrentQuestionIdx(0);
                        setQuizScore(0);
                        setShowAnswer(false);
                        setUserAnswer(null);
                        setQuizFinished(false);
                      }}
                      className="w-full py-5 bg-indigo-500 hover:bg-indigo-400 text-white rounded-2xl font-black text-lg uppercase tracking-widest shadow-xl shadow-indigo-500/20 transition-all hover:scale-[1.02]"
                    >
                      Initialize Test
                    </button>
                  </div>
                </div>

                {/* History */}
                {quizHistory.length > 0 && (
                  <div className="pt-12 space-y-6">
                    <h4 className="text-xs font-black uppercase tracking-[0.4em] text-gray-600">
                      Performance Log
                    </h4>
                    <div className="max-w-2xl mx-auto space-y-3">
                      {quizHistory.map((h, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5"
                        >
                          <span className="text-sm text-gray-400">
                            {h.date}
                          </span>
                          <span className="font-bold">
                            {h.score}/{h.total}
                          </span>
                          <span
                            className={`text-xs font-black px-3 py-1 rounded-full ${h.percent >= 80 ? "bg-emerald-500/20 text-emerald-400" : "bg-rose-500/20 text-rose-400"}`}
                          >
                            {h.percent}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : quizFinished ? (
              <div className="max-w-2xl mx-auto text-center space-y-12 py-12">
                <div className="relative">
                  <Trophy
                    className="mx-auto text-yellow-400 animate-bounce"
                    size={120}
                  />
                  <div className="absolute inset-0 bg-yellow-400/20 blur-[100px] -z-10" />
                </div>
                <div className="space-y-4 px-4">
                  <h2 className="text-2xl md:text-5xl font-black tracking-tighter">
                    MISSION COMPLETE
                  </h2>
                  <p className="text-gray-400 text-lg md:text-xl font-medium">
                    Session analysis concluded.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 px-4">
                  <div className="p-6 md:p-8 bg-white/5 rounded-3xl border border-white/10">
                    <p className="text-[10px] uppercase font-bold text-gray-500 mb-2">
                      Final Score
                    </p>
                    <p className="text-2xl md:text-3xl font-black text-white">
                      {quizScore}/{filteredQuestions.length}
                    </p>
                  </div>
                  <div className="p-6 md:p-8 bg-white/5 rounded-3xl border border-white/10">
                    <p className="text-[10px] uppercase font-bold text-gray-500 mb-2">
                      Efficiency
                    </p>
                    <p className="text-2xl md:text-3xl font-black text-emerald-400">
                      {Math.round((quizScore / filteredQuestions.length) * 100)}
                      %
                    </p>
                  </div>
                  <div className="p-6 md:p-8 bg-white/5 rounded-3xl border border-white/10">
                    <p className="text-[10px] uppercase font-bold text-gray-500 mb-2">
                      Rank
                    </p>
                    <p className="text-xl md:text-2xl font-black text-indigo-400">
                      {quizScore / filteredQuestions.length > 0.8
                        ? "OPTIMAL"
                        : "RELEARN"}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setQuizStarted(false)}
                  className="px-12 py-5 bg-white text-black font-black uppercase tracking-widest rounded-2xl hover:bg-gray-200 transition-all flex items-center space-x-4 mx-auto"
                >
                  <RotateCcw size={20} />
                  <span>Return to Command Center</span>
                </button>
              </div>
            ) : (
              <div className="space-y-12">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setQuizStarted(false)}
                    className="px-6 py-2 bg-white/5 rounded-full text-[10px] font-black uppercase tracking-widest text-white/50 hover:text-white border border-white/10"
                  >
                    Abort Simulation
                  </button>
                  <div className="px-8 py-3 bg-indigo-500/10 rounded-2xl border border-indigo-500/20">
                    <span className="text-xs font-black tracking-widest text-indigo-400">
                      ITEM {currentQuestionIdx + 1}/{filteredQuestions.length}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-emerald-400 font-bold">
                      {quizScore}
                    </span>
                    <div className="w-12 h-1 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-emerald-500"
                        style={{
                          width: `${(quizScore / (currentQuestionIdx || 1)) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-12 bg-white/5 rounded-3xl md:rounded-[3.5rem] border border-white/10 space-y-6 md:space-y-12 shadow-3xl">
                  {showAnswer && (
                    <button
                      onClick={nextQuestion}
                      className="w-full py-4 md:py-5 bg-white text-black font-black uppercase tracking-widest rounded-2xl hover:invert transition-all flex items-center justify-center space-x-4"
                    >
                      <span>Continue</span>
                      <ArrowRight size={20} />
                    </button>
                  )}

                  <h3 className="text-lg md:text-2xl font-bold leading-snug text-white/90">
                    {filteredQuestions[currentQuestionIdx].question}
                  </h3>

                  <div className="grid grid-cols-1 gap-4">
                    {filteredQuestions[currentQuestionIdx].options.map(
                      (opt, i) => {
                        const isCorrect =
                          i === filteredQuestions[currentQuestionIdx].correct;
                        const isSelected = userAnswer === i;
                        let btnClass =
                          "bg-white/5 border-white/10 text-white/80";

                        if (showAnswer) {
                          if (isCorrect)
                            btnClass =
                              "bg-emerald-500/20 border-emerald-500 text-emerald-400";
                          else if (isSelected)
                            btnClass =
                              "bg-rose-500/20 border-rose-500 text-rose-400";
                          else btnClass = "opacity-30 border-white/5";
                        } else if (isSelected) {
                          btnClass =
                            "bg-indigo-500/20 border-indigo-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.2)]";
                        }

                        return (
                          <button
                            key={i}
                            onClick={() => submitAnswer(i)}
                            className={`w-full p-6 text-left rounded-2xl border transition-all flex items-center group ${btnClass}`}
                          >
                            <div
                              className={`w-8 h-8 rounded-lg flex items-center justify-center font-black mr-6 transition-colors ${isSelected ? "bg-indigo-500 text-white" : "bg-white/5 text-white/20 group-hover:bg-white/10"}`}
                            >
                              {["A", "B", "C", "D"][i]}
                            </div>
                            <span className="font-medium text-base md:text-lg">
                              {opt}
                            </span>
                            {showAnswer && isCorrect && (
                              <CheckCircle
                                className="ml-auto text-emerald-400"
                                size={24}
                              />
                            )}
                            {showAnswer && isSelected && !isCorrect && (
                              <XCircle
                                className="ml-auto text-rose-400"
                                size={24}
                              />
                            )}
                          </button>
                        );
                      },
                    )}
                  </div>

                  {showAnswer && (
                    <div className="p-6 md:p-8 bg-indigo-500/5 rounded-2xl md:rounded-3xl border border-indigo-500/10 space-y-4 animate-in fade-in slide-in-from-bottom-4">
                      <div className="flex items-center space-x-2 text-indigo-400 font-black text-[10px] uppercase tracking-widest">
                        <Info size={14} />
                        <span>Insight Engineering</span>
                      </div>
                      <p className="text-gray-300 leading-relaxed text-base md:text-lg italic">
                        {filteredQuestions[currentQuestionIdx].explanation}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Bottom Navigation - Fixed only on mobile */}
      {!isFocusMode && (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-2xl border-t border-white/10 px-6 py-4 flex items-center justify-between shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
          <button
            onClick={() => {
              setActiveTab("home");
              setQuizStarted(false);
            }}
            className={`flex flex-col items-center space-y-1 transition-colors ${activeTab === "home" ? "text-indigo-400" : "text-gray-500"}`}
          >
            <Layers size={20} />
            <span className="text-[10px] font-bold uppercase tracking-tighter">
              Home
            </span>
          </button>
          <button
            onClick={() => {
              setActiveTab("study");
              setQuizStarted(false);
            }}
            className={`flex flex-col items-center space-y-1 transition-colors ${activeTab === "study" ? "text-indigo-400" : "text-gray-500"}`}
          >
            <BookOpen size={20} />
            <span className="text-[10px] font-bold uppercase tracking-tighter">
              Study
            </span>
          </button>
          <button
            onClick={() => {
              setActiveTab("flashcards");
              setQuizStarted(false);
            }}
            className={`flex flex-col items-center space-y-1 transition-colors ${activeTab === "flashcards" ? "text-indigo-400" : "text-gray-500"}`}
          >
            <Zap size={20} />
            <span className="text-[10px] font-bold uppercase tracking-tighter">
              Cards
            </span>
          </button>
          <button
            onClick={() => {
              setActiveTab("quiz");
              setQuizStarted(false);
            }}
            className={`flex flex-col items-center space-y-1 transition-colors ${activeTab === "quiz" ? "text-indigo-400" : "text-gray-500"}`}
          >
            <HelpCircle size={20} />
            <span className="text-[10px] font-bold uppercase tracking-tighter">
              Exam
            </span>
          </button>
        </nav>
      )}
    </div>
  );
};

export default App;
