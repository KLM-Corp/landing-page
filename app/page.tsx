"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, TrendingUp, MessageSquare, BarChart3, ArrowRight, Star } from "lucide-react"
import { motion } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { OrbitingServices } from "@/components/examples/orbiting-services"
import { RetroGrid } from "@/components/magicui/retro-grid"
import { WhatsAppOpenAIBeam } from "@/components/examples/whatsapp-openai-beam"

// Simplified animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

// Animated Counter Component
function AnimatedCounter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let startTime: number
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime
            const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
            setCount(Math.floor(progress * end))
            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [end, duration, hasAnimated])

  return <span ref={ref}>{count}</span>
}

// Floating Elements Component
function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-20 left-10 w-4 h-4 bg-blue-400/20 rounded-full"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-40 right-20 w-6 h-6 bg-blue-300/20 rounded-full"
        animate={{
          y: [0, 15, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-3 h-3 bg-blue-500/20 rounded-full"
        animate={{
          y: [0, -25, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  )
}

export default function AutomationLanding() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="font-sans text-white overflow-hidden">
      {/* Header */}
      <motion.div
        className="bg-[#0B132B] relative z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-between px-6 py-4 bg-[#0B132B]">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/icons/klm-word-white-logo.svg"
              alt="KLM CORP Logo"
              width={120}
              height={48}
              className="h-12 w-auto"
            />
          </motion.div>
          <nav className="space-x-6 text-sm text-white">
            <motion.span
              className="hover:text-blue-400 cursor-pointer transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
            >
              Automações
            </motion.span>
            <motion.span
              className="hover:text-blue-400 cursor-pointer transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
            >
              Contato
            </motion.span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B132B] via-[#1a2b5c] to-[#0B132B] opacity-90"></div>
          <RetroGrid darkLineColor="gray" lightLineColor="gray" opacity={0.3} />
          <FloatingElements />

          <div className="max-w-4xl mx-auto relative z-10">
            <motion.h3
              className="text-blue-400 text-lg mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Automações Inteligentes com IA
            </motion.h3>

            <motion.h1
              className="text-4xl md:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Pare de perder <span className="text-blue-400">100+ horas por mês</span> em tarefas repetitivas
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-blue-200 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Automatizamos seus processos manuais integrando Google Sheets, Notion, CRMs, WhatsApp e mais de 400
              ferramentas.
              <strong className="text-white"> Sem programação, sem complicação.</strong>
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg transition-all duration-300"
                >
                  Agendar Diagnóstico Gratuito
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 text-lg bg-transparent transition-all duration-300"
                >
                  Ver Casos de Sucesso
                </Button>
              </motion.div>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              {[
                { value: 100, suffix: "h/mês", label: "economizadas para um cliente" },
                { value: 80, suffix: "%", label: "redução de erros manuais" },
                { value: 400, suffix: "+", label: "integrações disponíveis" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 rounded-lg p-4 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl font-bold text-blue-400">
                    <AnimatedCounter end={item.value} />
                    {item.suffix}
                  </div>
                  <div className="text-sm text-white">{item.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex justify-center"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Image src="/icons/wolf-blue.svg" alt="KLM Wolf Logo" width={160} height={160} className="h-40 w-auto" />
            </motion.div>
          </div>
        </section>
      </motion.div>

      {/* Automations Categories */}
      <section className="bg-[#D4E5F5] px-6 py-20 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Automações que <span className="text-blue-600">transformam seu negócio</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Organizamos as automações por categoria de valor para você focar no que realmente importa
            </p>
          </motion.div>

          {/* WhatsApp and OpenAI Integration Demo */}
          <div className="flex justify-center mb-16">
            <WhatsAppOpenAIBeam />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Clock,
                title: "Produtividade & Gestão",
                color: "text-blue-600",
                items: [
                  "Sincronização automática entre planilhas e sistemas",
                  "Backup automático de dados importantes",
                  "Organização automática de arquivos",
                  "Lembretes e notificações inteligentes",
                ],
              },
              {
                icon: TrendingUp,
                title: "Marketing & Vendas",
                color: "text-green-600",
                items: [
                  "Captura automática de leads do site",
                  "Sequências de e-mail personalizadas",
                  "Atualização automática do CRM",
                  "Postagens automáticas nas redes sociais",
                ],
              },
              {
                icon: MessageSquare,
                title: "Atendimento & Suporte",
                color: "text-purple-600",
                items: [
                  "Chatbots inteligentes no WhatsApp",
                  "Distribuição automática de tickets",
                  "Respostas automáticas por categoria",
                  "Follow-up automático de satisfação",
                ],
              },
              {
                icon: BarChart3,
                title: "Relatórios Automáticos",
                color: "text-orange-600",
                items: [
                  "Dashboards atualizados em tempo real",
                  "Relatórios mensais por e-mail",
                  "Alertas de performance automáticos",
                  "Consolidação de dados de múltiplas fontes",
                ],
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 h-full border-0 group">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <category.icon
                        className={`h-8 w-8 ${category.color} mr-3 group-hover:scale-110 transition-transform duration-300`}
                      />
                      <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
                    </div>
                    <ul className="space-y-3 text-gray-600">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <Image
                            src="/icons/seta.svg"
                            alt="Arrow"
                            width={16}
                            height={16}
                            className="mr-2 mt-1 flex-shrink-0"
                          />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="bg-[#0B132B] text-white px-6 py-20 relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Resultados que <span className="text-[#00aaff]">nossos clientes alcançaram</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Veja como empresas como a sua estão economizando tempo e aumentando a produtividade
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                metric: "100h/mês",
                company: "Consultoria Jurídica",
                testimonial:
                  "Automatizamos a integração entre nosso CRM e planilhas de controle. Eliminamos completamente a digitação manual de dados de clientes.",
                color: "text-blue-400",
              },
              {
                metric: "80%",
                company: "E-commerce de Moda",
                testimonial:
                  "Reduzimos erros manuais em 80% ao conectar nosso estoque com as planilhas financeiras. Agora tudo se atualiza sozinho.",
                color: "text-green-400",
              },
              {
                metric: "50h/mês",
                company: "Agência de Marketing",
                testimonial:
                  "Automatizamos relatórios de campanhas que eram feitos manualmente. Agora nossos clientes recebem dados em tempo real.",
                color: "text-purple-400",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="bg-white/5 border border-white/10 backdrop-blur-sm h-full hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className={`text-3xl font-bold ${testimonial.color} mb-2`}>{testimonial.metric}</div>
                    <div className="text-lg font-semibold mb-3 flex items-center text-white">
                      <Star className="h-4 w-4 text-yellow-400 mr-2" />
                      {testimonial.company}
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">&#34;{testimonial.testimonial}&#34;</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-[#D4E5F5] px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Como funciona?</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Processo simples e transparente. Você não precisa entender de tecnologia, nós cuidamos de tudo.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Diagnóstico Gratuito",
                description:
                  "Conversamos sobre seus processos manuais e identificamos as melhores oportunidades de automação para seu negócio.",
              },
              {
                step: "2",
                title: "Desenvolvimento Personalizado",
                description:
                  "Criamos as automações específicas para suas necessidades usando n8n e IA. Você acompanha todo o processo.",
              },
              {
                step: "3",
                title: "Suporte Contínuo",
                description:
                  "Oferecemos treinamento da equipe, suporte técnico e ajustes conforme sua empresa cresce e evolui.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4"
                  whileHover={{ scale: 1.1 }}
                >
                  {step.step}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#0B132B] text-white px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Perguntas <span className="text-[#00aaff]">Frequentes</span>
            </h2>
            <p className="text-xl text-gray-300">
              Esclarecemos as principais dúvidas sobre nossos serviços de automação
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "Preciso saber programar para usar as automações?",
                answer:
                  "Não! Esse é nosso diferencial. Criamos tudo pronto para você. Você só precisa usar as ferramentas que já conhece (como Google Sheets, WhatsApp, seu CRM) e nós conectamos tudo automaticamente nos bastidores.",
              },
              {
                question: "Vocês oferecem suporte contínuo?",
                answer:
                  "Sim! Oferecemos suporte técnico completo, treinamento da sua equipe e ajustes nas automações sempre que necessário. Você nunca fica sozinho - somos seu parceiro de longo prazo.",
              },
              {
                question: "Posso pedir novas automações depois?",
                answer:
                  "Claro! Na verdade, é muito comum. Conforme sua empresa cresce, surgem novas necessidades. Nossos clientes frequentemente expandem suas automações - e nós facilitamos todo esse processo.",
              },
              {
                question: "Preciso contratar um servidor ou vocês hospedam?",
                answer:
                  "Nós cuidamos de toda a infraestrutura! Suas automações ficam hospedadas em servidores seguros e confiáveis. Você não precisa se preocupar com aspectos técnicos - apenas usar e economizar tempo.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-blue-400 flex items-center">
                      <Image src="/icons/seta.svg" alt="Arrow" width={20} height={20} className="mr-3" />
                      {faq.question}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-[#1E293B] text-white px-6 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              Pronto para economizar <span className="text-[#00aaff]">100+ horas por mês?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-md">
              Agende um diagnóstico gratuito e descubra exatamente quais processos podemos automatizar no seu negócio.
              Sem compromisso, sem enrolação.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Diagnóstico 100% gratuito (30 minutos)",
                "Identificamos suas maiores oportunidades",
                "Proposta personalizada em 24h",
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-[#0B132B] border border-gray-600 w-full max-w-md mx-auto backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Diagnóstico Gratuito</h3>
                  <p className="text-gray-400">Preencha os dados abaixo</p>
                </div>

                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Nome completo *</label>
                    <Input
                      placeholder="Como você gostaria de ser chamado(a)?"
                      className="w-full bg-[#11263f] text-white border border-gray-700 focus:border-[#00aaff] transition-colors duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">E-mail empresarial *</label>
                    <Input
                      type="email"
                      placeholder="seu@email.com"
                      className="w-full bg-[#11263f] text-white border border-gray-700 focus:border-[#00aaff] transition-colors duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">WhatsApp *</label>
                    <Input
                      placeholder="(11) 99999-9999"
                      className="w-full bg-[#11263f] text-white border border-gray-700 focus:border-[#00aaff] transition-colors duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Qual sua maior dor com processos manuais?
                    </label>
                    <textarea
                      placeholder="Ex: Perco muito tempo copiando dados entre planilhas..."
                      className="w-full bg-[#11263f] text-white border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[#00aaff] h-20 resize-none transition-colors duration-300"
                    />
                  </div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="w-full bg-[#00aaff] hover:bg-[#0099dd] text-white py-3 text-lg font-medium transition-all duration-300">
                      Agendar Diagnóstico Gratuito
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </motion.div>
                </form>

                <p className="text-xs text-gray-400 text-center mt-4">Resposta em até 2 horas úteis • Sem spam</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#0B132B] text-white text-center px-6 py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent" />

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Não deixe sua empresa perder mais tempo com <br />
            <span className="text-[#00aaff]">tarefas que podem ser automatizadas</span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Enquanto você lê isso, seus concorrentes podem estar automatizando processos e ganhando vantagem
            competitiva. Que tal começar hoje mesmo?
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-[#00aaff] hover:bg-[#0099dd] text-white px-8 py-4 text-lg transition-all duration-300"
              >
                Quero Meu Diagnóstico Gratuito
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="border-[#00aaff] text-[#00aaff] hover:bg-[#00aaff] hover:text-white px-8 py-4 text-lg bg-transparent transition-all duration-300"
              >
                Falar no WhatsApp
              </Button>
            </motion.div>
          </motion.div>

          <motion.p
            className="text-sm text-gray-400 mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            ✓ Sem compromisso ✓ Diagnóstico em 30 minutos ✓ Proposta personalizada
          </motion.p>
        </div>
      </section>
    </div>
  )
}
