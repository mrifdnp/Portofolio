import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { LogOut, LayoutDashboard, UserCircle, Briefcase, FileText } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('hero');
  const [heroData, setHeroData] = useState({ title: '', description: '' });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const token = localStorage.getItem('adminToken');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/portfolio');
      if (response.data.hero) {
        setHeroData(response.data.hero);
      }
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch data:", error);
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  const handleSaveHero = async (e) => {
    e.preventDefault();
    setSaving(true);
    setMessage({ text: '', type: '' });

    try {
      await axios.put('http://localhost:3000/api/admin/hero', heroData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMessage({ text: 'Data Hero berhasil disimpan!', type: 'success' });
    } catch (error) {
      setMessage({ text: 'Gagal menyimpan data.', type: 'error' });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="min-h-screen bg-[#050505] flex items-center justify-center text-white">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-300 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-neutral-900 border-r border-neutral-800 flex flex-col hidden md:flex">
        <div className="p-6 border-b border-neutral-800">
          <h2 className="text-xl font-bold text-white tracking-wide">Admin<span className="text-pink-500">Panel</span></h2>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <button 
            onClick={() => setActiveTab('hero')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'hero' ? 'bg-pink-500/10 text-pink-500' : 'hover:bg-neutral-800 text-neutral-400'}`}
          >
            <LayoutDashboard size={20} />
            <span className="font-medium">Hero Section</span>
          </button>
          <button 
            onClick={() => setActiveTab('about')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'about' ? 'bg-pink-500/10 text-pink-500' : 'hover:bg-neutral-800 text-neutral-400'}`}
          >
            <UserCircle size={20} />
            <span className="font-medium">About</span>
          </button>
          <button 
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors hover:bg-neutral-800 text-neutral-400 opacity-50 cursor-not-allowed"
            title="Akan segera hadir"
          >
            <Briefcase size={20} />
            <span className="font-medium">Projects</span>
          </button>
          <button 
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors hover:bg-neutral-800 text-neutral-400 opacity-50 cursor-not-allowed"
            title="Akan segera hadir"
          >
            <FileText size={20} />
            <span className="font-medium">Experience</span>
          </button>
        </nav>

        <div className="p-4 border-t border-neutral-800">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-400/10 transition-colors font-medium"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">
              {activeTab === 'hero' ? 'Edit Hero Section' : 'Edit About Section'}
            </h1>
            <p className="text-neutral-500">Kelola konten yang akan ditampilkan di halaman depan portofolio Anda.</p>
          </header>

          {message.text && (
            <div className={`px-4 py-3 rounded-xl mb-6 text-sm font-medium ${message.type === 'success' ? 'bg-green-500/10 text-green-500 border border-green-500/50' : 'bg-red-500/10 text-red-500 border border-red-500/50'}`}>
              {message.text}
            </div>
          )}

          {activeTab === 'hero' && (
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
              <form onSubmit={handleSaveHero} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-400 mb-2">Nama / Title</label>
                  <input
                    type="text"
                    value={heroData.title}
                    onChange={(e) => setHeroData({...heroData, title: e.target.value})}
                    className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-xl focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-colors text-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-400 mb-2">Deskripsi Hero</label>
                  <textarea
                    rows="6"
                    value={heroData.description}
                    onChange={(e) => setHeroData({...heroData, description: e.target.value})}
                    className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-xl focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-colors text-white resize-none"
                  ></textarea>
                </div>

                <div className="pt-4 border-t border-neutral-800 flex justify-end">
                  <button
                    type="submit"
                    disabled={saving}
                    className="bg-white text-black font-semibold py-2.5 px-6 rounded-xl hover:bg-neutral-200 transition-colors disabled:opacity-50"
                  >
                    {saving ? 'Menyimpan...' : 'Simpan Perubahan'}
                  </button>
                </div>
              </form>
            </div>
          )}

          {activeTab === 'about' && (
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 flex flex-col items-center justify-center min-h-[300px] text-center">
              <div className="w-16 h-16 bg-neutral-800 rounded-full flex items-center justify-center mb-4">
                <UserCircle size={32} className="text-neutral-500" />
              </div>
              <h3 className="text-xl font-medium text-white mb-2">Tahap Pengembangan</h3>
              <p className="text-neutral-500 max-w-sm">Halaman edit About sedang dalam tahap pengembangan. Anda bisa menggunakan bagian Hero untuk sementara.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
