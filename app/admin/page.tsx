'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('projetos');
  const [projects, setProjects] = useState<any[]>([]);
  const [contacts, setContacts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  // Form states
  const [formData, setFormData] = useState({
    title: '', desc: '', link: '', img: '', badge: ''
  });

  const fetchProjects = async () => {
    try {
      const { data } = await supabase.from('projects').select('*').order('created_at', { ascending: false });
      setProjects(data || []);
    } catch (e) {
      console.error(e);
    }
  };

  const fetchContacts = async () => {
    try {
      const { data } = await supabase.from('contacts').select('*').order('created_at', { ascending: false });
      setContacts(data || []);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      supabase.from('projects').select('*').order('created_at', { ascending: false }).then(({ data }) => {
        if (data) setProjects(data);
      });
      supabase.from('contacts').select('*').order('created_at', { ascending: false }).then(({ data }) => {
        if (data) setContacts(data);
      });
    }
  }, [isAuthenticated]);

  const handleAddProject = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await supabase.from('projects').insert([formData]);
      setFormData({ title: '', desc: '', link: '', img: '', badge: '' });
      fetchProjects();
      alert('Projeto adicionado!');
    } catch (err) {
      console.error(err);
      alert('Erro ao adicionar (verifique se as variáveis de ambiente do Supabase estão configuradas e se existe a tabela "projects").');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProject = async (id: number) => {
    if(!confirm('Deletar projeto?')) return;
    await supabase.from('projects').delete().eq('id', id);
    fetchProjects();
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      });
      if (res.ok) {
        setIsAuthenticated(true);
        fetchProjects();
        fetchContacts();
      } else {
        alert('Senha incorreta!');
      }
    } catch {
      alert('Erro ao fazer login.');
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-brand-dark flex flex-col justify-center items-center text-white px-4">
        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 w-full max-w-sm">
          <h1 className="text-2xl font-bold uppercase mb-6 text-brand-yellow text-center">Acesso Restrito</h1>
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} className="bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-yellow" autoFocus />
            <button type="submit" disabled={loading} className="bg-brand-yellow text-black font-bold uppercase py-3 rounded-xl">{loading ? 'Verificando...' : 'Entrar'}</button>
          </form>
          <div className="mt-6 text-center">
            <Link href="/" className="text-white/50 hover:text-brand-yellow text-sm">&larr; Voltar para o Portfólio</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-dark text-white p-8 md:p-12 relative z-10 pt-32">
      <Link href="/" className="text-brand-yellow mb-8 inline-block">&larr; Voltar para Home</Link>
      <h1 className="text-4xl font-display font-bold uppercase tracking-wider mb-8">Admin Dashboard</h1>

      <div className="flex gap-4 mb-8">
        <button onClick={() => setActiveTab('projetos')} className={`px-6 py-2 rounded-full font-bold uppercase ${activeTab === 'projetos' ? 'bg-brand-yellow text-black' : 'bg-white/10'}`}>Projetos</button>
        <button onClick={() => setActiveTab('contatos')} className={`px-6 py-2 rounded-full font-bold uppercase ${activeTab === 'contatos' ? 'bg-brand-yellow text-black' : 'bg-white/10'}`}>Contatos</button>
      </div>

      {activeTab === 'projetos' && (
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/3 bg-white/5 p-6 rounded-2xl border border-white/10">
            <h2 className="text-xl font-bold uppercase mb-6 text-brand-yellow">Novo Projeto</h2>
            <form onSubmit={handleAddProject} className="flex flex-col gap-4">
              <input required value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} type="text" placeholder="Título" className="bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white" />
              <input required value={formData.desc} onChange={e => setFormData({...formData, desc: e.target.value})} type="text" placeholder="Descrição" className="bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white" />
              <input required value={formData.link} onChange={e => setFormData({...formData, link: e.target.value})} type="text" placeholder="Link (ex: /projeto-novo, https://...)" className="bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white" />
              <input required value={formData.img} onChange={e => setFormData({...formData, img: e.target.value})} type="text" placeholder="URL da Capa" className="bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white" />
              <input value={formData.badge} onChange={e => setFormData({...formData, badge: e.target.value})} type="text" placeholder="Badge / Tag (opcional)" className="bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white" />
              <button disabled={loading} type="submit" className="bg-brand-yellow text-black font-bold uppercase py-3 rounded-xl mt-2">{loading ? 'Salvando...' : 'Adicionar Projeto'}</button>
            </form>
          </div>

          <div className="w-full md:w-2/3">
            <h2 className="text-xl font-bold uppercase mb-6">Lista de Projetos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {projects.length === 0 && <p className="text-white/50">Nenhum projeto encontrado no banco de dados.</p>}
              {projects.map(p => (
                <div key={p.id} className="bg-white/5 p-4 rounded-xl border border-white/10 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-lg text-brand-yellow">{p.title}</h3>
                    <p className="text-sm text-white/70">{p.desc}</p>
                    <p className="text-xs text-white/50 truncate mt-2">{p.link}</p>
                  </div>
                  <button onClick={() => handleDeleteProject(p.id)} className="text-red-500 text-sm font-bold uppercase mt-4 text-left">Deletar</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'contatos' && (
        <div>
          <h2 className="text-xl font-bold uppercase mb-6 text-brand-yellow">Mensagens de Contato</h2>
          <div className="flex flex-col gap-4">
            {contacts.length === 0 && <p className="text-white/50">Nenhum contato encontrado no banco de dados.</p>}
            {contacts.map(c => (
              <div key={c.id} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-lg">{c.name}</h3>
                    <a href={`mailto:${c.email}`} className="text-brand-yellow text-sm">{c.email}</a>
                  </div>
                  <span className="text-white/40 text-xs">{new Date(c.created_at).toLocaleDateString('pt-BR')}</span>
                </div>
                <p className="text-white/80 whitespace-pre-wrap">{c.message}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
