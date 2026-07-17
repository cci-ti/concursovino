import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Contacto: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [statusMsg, setStatusMsg] = useState('');
  const [statusType, setStatusType] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // Configuración de la URL de n8n. Puedes editarla aquí o definir VITE_N8N_WEBHOOK_URL en tu archivo .env
  const N8N_WEBHOOK_URL = import.meta.env.VITE_N8N_WEBHOOK_URL || 'https://n8n-n8n.ricijy.easypanel.host/webhook/concursovino';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setStatusMsg('Por favor, completa todos los campos requeridos (*).');
      setStatusType('error');
      return;
    }

    setStatusMsg('Enviando mensaje...');
    setStatusType('loading');

    try {
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          subject: subject || 'Contacto Web - Concurso Nacional del Vino',
          message,
        }),
      });

      if (response.ok) {
        setStatusMsg('¡Tu mensaje ha sido enviado con éxito! Nos comunicaremos contigo pronto.');
        setStatusType('success');

        setName('');
        setEmail('');
        setPhone('');
        setSubject('');
        setMessage('');
      } else {
        setStatusMsg('Hubo un inconveniente al procesar el envío. Por favor, inténtalo de nuevo.');
        setStatusType('error');
      }
    } catch (error) {
      console.error('Error al enviar a n8n:', error);
      setStatusMsg('Hubo un error de conexión. Revisa tu conexión a internet.');
      setStatusType('error');
    }
  };


  const getMsgStyle = () => {
    if (statusType === 'idle') return { display: 'none' };
    if (statusType === 'loading') return { display: 'block', background: 'rgba(107,26,40,0.1)', color: 'var(--burgundy)' };
    if (statusType === 'success') return { display: 'block', background: 'rgba(40,167,69,0.1)', color: '#28a745' };
    if (statusType === 'error') return { display: 'block', background: 'rgba(220,53,69,0.1)', color: '#dc3545' };
    return { display: 'none' };
  };

  return (
    <section className="section">
      <div className="container">
        <div className="contacto-grid">
          <div className="contacto-info">
            <div className="sec-eyebrow" style={{ marginTop: 0 }}>Comunícate con nosotros</div>
            <h2 className="sec-title">Contacto</h2>
            <div className="divider-line"></div>
            <p>Para consultas sobre inscripciones, bases técnicas del reglamento, entrega de muestras o cualquier aspecto organizativo del concurso, por favor comunícate con nuestro equipo directivo.</p>

            <div className="contact-item">
              <span className="ci">
                <Phone size={20} strokeWidth={1.8} />
              </span>
              <div>
                <strong>Teléfonos de contacto:</strong><br />
                <a href="tel:968183971">968 183 971</a><br />
                <a href="tel:993479921">993 479 921</a>
              </div>
            </div>

            <div className="contact-item">
              <span className="ci">
                <Mail size={20} strokeWidth={1.8} />
              </span>
              <div>
                <strong>Correos electrónicos:</strong><br />
                <a href="mailto:imagen@camaraica.org.pe">imagen@camaraica.org.pe</a><br />
                <a href="mailto:concursovinoperuano@gmail.com">concursovinoperuano@gmail.com</a>
              </div>
            </div>

            <div className="contact-item">
              <span className="ci">
                <MapPin size={20} strokeWidth={1.8} />
              </span>
              <div>
                <strong>Sede organizadora:</strong><br />
                Cámara de Comercio de Ica<br />
                Ica, Perú
              </div>
            </div>
          </div>

          <div className="form-wrap reveal">
            <h3>Envíanos un mensaje</h3>
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label>Nombre Completo *</label>
                <input
                  type="text"
                  placeholder="Tu nombre completo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="field">
                <label>Correo Electrónico *</label>
                <input
                  type="email"
                  placeholder="tu@correo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="field">
                <label>Teléfono / Celular</label>
                <input
                  type="tel"
                  placeholder="Ej: +51 999 999 999"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="field">
                <label>Asunto</label>
                <input
                  type="text"
                  placeholder="Ej: Consulta sobre inscripción"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div className="field">
                <label>Mensaje *</label>
                <textarea
                  placeholder="Escribe tu mensaje aquí..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <button
                className="btn-primary"
                id="submitBtn"
                style={{ width: '100%', padding: '.85rem' }}
                type="submit"
                disabled={statusType === 'loading'}
              >
                {statusType === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
              </button>
              <div id="formMsg" style={getMsgStyle()}>
                {statusMsg}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
