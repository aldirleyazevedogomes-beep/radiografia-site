import { useState } from "react";
import Layout from "@/components/Layout";

export default function Contactos() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
    utilidade: "Útil",
    frequencia: "Primeira vez",
    facilEncontrar: "Médio",
    secoes: [],
    sugestao: "",
    prefere: "Embutido",
  });
  const [status, setStatus] = useState({
    type: null,  // null | "sending" | "success" | "error"
    message: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setForm((s) => {
        const set = new Set(s.secoes);
        if (checked) set.add(value); else set.delete(value);
        return { ...s, secoes: Array.from(set) };
      });
    } else {
      setForm((s) => ({ ...s, [name]: value }));
    }
  };

  const validate = () => {
    if (!form.nome.trim()) return "Por favor indica o teu nome.";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) return "Email inválido.";
    if (!form.mensagem.trim()) return "Escreve uma mensagem.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setStatus({ type: "error", message: err });
      return;
    }
    
    setStatus({ type: "sending", message: "A enviar mensagem..." });

    try {
      // Format data according to Formspree's expected structure
      const formData = {
        _replyto: form.email,
        email: form.email,
        name: form.nome,
        message: form.mensagem,
        subject: form.assunto,
        utilidade: form.utilidade,
        facilidade: form.facilEncontrar,
        secoes: form.secoes.join(", "),
        sugestao: form.sugestao,
        preferencia: form.prefere
      };

      console.log("Sending to Formspree:", formData);
      
      const res = await fetch("https://formspree.io/f/xldolgaw", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData),
      });

      console.log("Formspree response status:", res.status);
      
      if (!res.ok) {
        if (res.status === 404) {
          throw new Error("Formulário não encontrado. Verifique o ID do Formspree.");
        }
        const data = await res.json();
        console.log("Formspree error response:", data);
        throw new Error(data.error || `Erro ao enviar formulário (${res.status})`);
      }
      
      const data = await res.json();
      console.log("Formspree success response:", data);

      setStatus({ type: "success", message: "Mensagem enviada. Obrigado!" });
      setForm({
        nome: "",
        email: "",
        assunto: "",
        mensagem: "",
        utilidade: "Útil",
        frequencia: "Primeira vez",
        facilEncontrar: "Médio",
        secoes: [],
        sugestao: "",
        prefere: "Embutido",
      });

      // Removed internal API option - using Formspree only
    } catch (err) {
      console.error("Form submission error:", err);
      setStatus({ 
        type: "error", 
        message: err.message || "Erro ao enviar. Por favor, tenta novamente mais tarde."
      });
    }
  };

  return (
    <div>
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-4">Sobre/Contactos</h1>

        <p className="text-gray-700 mb-8">
          Radiografia da Prisão de um Deputado — é um projeto editorial independente.
          Propõe-se uma Narrativa-Documental que apresente o caso de forma clara, cronolõgica e visual.
          Permite a Navegação Temática - Por Capítulos, e oferece acesso integral ao documentos original,
          para Juristas, Jornalistas e Público interessado.
        </p>

        <form onSubmit={handleSubmit} className="grid gap-6">
          <div className="grid md:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-sm font-medium">Nome</span>
              <input
                name="nome"
                value={form.nome}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border px-3 py-2"
                required
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium">Email</span>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border px-3 py-2"
                required
              />
            </label>
          </div>

          <label className="block">
            <span className="text-sm font-medium">Assunto</span>
            <input
              name="assunto"
              value={form.assunto}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border px-3 py-2"
              placeholder="Ex.: Documento para análise / Sugestão"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium">Mensagem</span>
            <textarea
              name="mensagem"
              value={form.mensagem}
              onChange={handleChange}
              rows={6}
              className="mt-1 block w-full rounded-md border px-3 py-2"
              required
            />
          </label>

          <div className="bg-gray-50 p-4 rounded-md border">
            <h3 className="text-md font-semibold mb-2">Inquérito (opcional)</h3>

            <div className="grid gap-3">
              <div>
                <label className="block text-sm">1. Como avalias a utilidade geral deste site?</label>
                <select name="utilidade" value={form.utilidade} onChange={handleChange} className="mt-1 block w-full rounded-md border px-3 py-2">
                  <option>Muito útil</option>
                  <option>Útil</option>
                  <option>Neutro</option>
                  <option>Pouco útil</option>
                  <option>Nada útil</option>
                </select>
              </div>

              
              <div>
                <label className="block text-sm">2. O conteúdo é fácil de encontrar?</label>
                <select name="facilEncontrar" value={form.facilEncontrar} onChange={handleChange} className="mt-1 block w-full rounded-md border px-3 py-2">
                  <option>Muito fácil</option>
                  <option>Fácil</option>
                  <option>Médio</option>
                  <option>Difícil</option>
                  <option>Muito difícil</option>
                </select>
              </div>

              <div>
                <label className="block text-sm mb-2">4. Que secção acha mais valiosa? (múltipla escolha)</label>
                <div className="flex flex-wrap gap-2">
                  {["Documentos originais", "Cronologia", "Artigos", "Capítulos embutidos", "Outros"].map((s) => (
                    <label key={s} className="inline-flex items-center gap-2">
                      <input type="checkbox" name="secoes" value={s} checked={form.secoes.includes(s)} onChange={handleChange} />
                      <span className="text-sm">{s}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm">5. Preferência de formato</label>
                <select name="prefere" value={form.prefere} onChange={handleChange} className="mt-1 block w-full rounded-md border px-3 py-2">
                  <option>Embutido</option>
                  <option>Baixar</option>
                </select>
              </div>

              <label className="block">
                <span className="text-sm">Comentário / sugestão</span>
                <input name="sugestao" value={form.sugestao} onChange={handleChange} className="mt-1 block w-full rounded-md border px-3 py-2" placeholder="(opcional)" />
              </label>
            </div>
          </div>

          <div className="mt-6 bg-white p-4 rounded-lg shadow-sm">
            <button 
              type="submit" 
              style={{
                backgroundColor: "#000000",
                color: "#ffffff",
                padding: "8px 16px",
                borderRadius: "4px",
                fontWeight: "bold",
                cursor: "pointer"
              }}
            >
              Enviar
            </button>
            {status.message && (
              <span style={{ marginLeft: "12px", color: status.type === "error" ? "#dc2626" : "#16a34a" }}>
                {status.message}
              </span>
            )}
          </div>

          <p className="text-xs text-gray-500 mt-3">
            Ao enviar concordas que a informação remitida seja usada apenas para responder à tua mensagem. Não partilhamos dados pessoais com terceiros.
          </p>
        </form>
      </section>
    </div>
  );
}
