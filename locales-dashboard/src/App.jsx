import { useState } from 'react'
import './styles.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formData, setFormData] = useState({ nombre: '', email: '', telefono: '', mensaje: '' })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí puedes agregar lógica para enviar el formulario
    console.log('Formulario enviado:', formData)
    setFormSubmitted(true)
    setFormData({ nombre: '', email: '', telefono: '', mensaje: '' })
    setTimeout(() => setFormSubmitted(false), 5000)
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">Ricardo Tomas</div>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
          <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <li><a href="#inicio" onClick={() => setMenuOpen(false)}>Inicio</a></li>
            <li><a href="#sobre-mi" onClick={() => setMenuOpen(false)}>Sobre Mí</a></li>
            <li><a href="#servicios" onClick={() => setMenuOpen(false)}>Servicios</a></li>
            <li><a href="#testimonios" onClick={() => setMenuOpen(false)}>Testimonios</a></li>
            <li><a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Medicina China Tradicional</h1>
          <p className="hero-subtitle">Equilibrio y bienestar a través de la sabiduría milenaria</p>
          <p className="hero-name">Ricardo Tomas</p>
          <div className="hero-buttons">
            <a href="#contacto" className="btn btn-primary">Agendar Consulta</a>
            <a href="#servicios" className="btn btn-secondary">Conocer Servicios</a>
          </div>
        </div>
        <div className="hero-decoration">
          <div className="yin-yang"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="about">
        <div className="container">
          <h2 className="section-title">Sobre Mí</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Soy <strong>Ricardo Tomas</strong>, especialista en Medicina China Tradicional con años de experiencia 
                ayudando a las personas a encontrar el equilibrio y la armonía en sus vidas.
              </p>
              <p>
                Mi enfoque combina las técnicas milenarias de la medicina china con un trato personalizado y 
                comprensivo, adaptado a las necesidades de cada paciente.
              </p>
              <p>
                Creo firmemente en el poder de la medicina holística para tratar no solo los síntomas, 
                sino también las causas profundas de los desequilibrios, promoviendo la salud integral 
                del cuerpo, la mente y el espíritu.
              </p>
            </div>
            <div className="about-image">
              <div className="placeholder-image">
                <span>🧘</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="services">
        <div className="container">
          <h2 className="section-title">Servicios</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">📍</div>
              <h3>Acupuntura</h3>
              <p>
                Tratamiento mediante la inserción de agujas finas en puntos específicos del cuerpo 
                para restaurar el flujo de energía y aliviar diversos padecimientos.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">🌿</div>
              <h3>Fitoterapia China</h3>
              <p>
                Prescripción de fórmulas herbales tradicionales personalizadas para tratar 
                desequilibrios y fortalecer el organismo de manera natural.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">👐</div>
              <h3>Tuina (Masaje Terapéutico)</h3>
              <p>
                Técnica de masaje chino que combina manipulación, presión y estiramiento para 
                mejorar la circulación energética y aliviar tensiones.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">🍃</div>
              <h3>Moxibustión</h3>
              <p>
                Aplicación de calor mediante la combustión de artemisa en puntos de acupuntura 
                para tonificar y calentar el organismo.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">⚖️</div>
              <h3>Diagnóstico Tradicional</h3>
              <p>
                Evaluación completa mediante observación, interrogatorio, palpación y análisis 
                del pulso y la lengua según los principios de la medicina china.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">🧘</div>
              <h3>Asesoría en Estilo de Vida</h3>
              <p>
                Guía personalizada sobre alimentación, ejercicio y hábitos según los principios 
                del equilibrio yin-yang para mantener la salud.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="testimonials">
        <div className="container">
          <h2 className="section-title">Testimonios</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">
                "Ricardo me ayudó a superar mis dolores crónicos de espalda. Su enfoque holístico 
                y su dedicación son excepcionales. Muy recomendado."
              </p>
              <p className="testimonial-author">— María G.</p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">
                "Después de años buscando soluciones, encontré en la medicina china con Ricardo 
                el equilibrio que necesitaba. Me siento renovada."
              </p>
              <p className="testimonial-author">— Ana L.</p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">
                "Profesional, empático y muy conocedor. Los tratamientos han mejorado significativamente 
                mi calidad de vida. Gracias, Ricardo."
              </p>
              <p className="testimonial-author">— Carlos M.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="contact">
        <div className="container">
          <h2 className="section-title">Contacto</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Agenda tu Consulta</h3>
              <p>
                Estoy aquí para ayudarte en tu camino hacia el bienestar. 
                Contáctame para más información o para agendar una consulta.
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <span>ricardo.tomas@medicinachina.com</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <span>+34 XXX XXX XXX</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>Tu Ciudad, España</span>
                </div>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              {formSubmitted && (
                <div className="form-success">
                  ✓ ¡Mensaje enviado con éxito! Te contactaremos pronto.
                </div>
              )}
              <div className="form-group">
                <input 
                  type="text" 
                  name="nombre"
                  placeholder="Nombre" 
                  value={formData.nombre}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="tel" 
                  name="telefono"
                  placeholder="Teléfono" 
                  value={formData.telefono}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <textarea 
                  name="mensaje"
                  placeholder="Mensaje" 
                  rows="5" 
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Ricardo Tomas - Medicina China Tradicional. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
