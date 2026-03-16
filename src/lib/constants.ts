// ============================================================
// CONSTANTES — Altere aqui as imagens e textos do site
// ============================================================

// Imagens — coloque os paths em /public e atualize aqui
export const IMAGES = {
  // Hero
  HERO_MOCKUP: '/dearbotchat.png', // ex: "/images/hero-mockup.png"

  // Seção de funcionalidades — screenshots do sistema
  FEATURE_1: '/chatdearbot.png', // ex: "/images/feature-atendimento.png"
  FEATURE_2: '/leads.png', // ex: "/images/feature-leads.png"
  FEATURE_3: '/analise.png', // ex: "/images/feature-dashboard.png"

  // Seção "Como funciona" — prints dos passos
  STEP_1: '/whatsapp.png', // ex: "/images/step-conectar.png"
  STEP_2: '/iaconfig.png', // ex: "/images/step-configurar.png"
  STEP_3: '/dash.png', // ex: "/images/step-ativar.png"

  // Seção de depoimentos — fotos dos clientes
  TESTIMONIAL_1: '', // ex: "/images/cliente-1.jpg"
  TESTIMONIAL_2: '', // ex: "/images/cliente-2.jpg"
  TESTIMONIAL_3: '', // ex: "/images/cliente-3.jpg"

  // Logo
  LOGO: '', // ex: "/images/logo.svg"

  // OG Image para redes sociais
  OG_IMAGE: '' // ex: "/images/og-image.png"
}

// WhatsApp
export const WHATSAPP_NUMBER = '5511944502819'
export const WHATSAPP_MESSAGE = 'Olá! Gostaria de saber mais sobre o Dear Bot.'
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

// Textos principais
export const HERO = {
  badge: 'Inteligência Artificial + WhatsApp',
  title: 'Transforme seu WhatsApp em uma máquina de vendas',
  subtitle:
    'O Dear Bot atende seus clientes 24 horas por dia com inteligência artificial. Qualifica leads, responde dúvidas, agenda reuniões e fecha vendas — tudo no piloto automático.',
  cta: 'Quero automatizar meu atendimento'
}

export const FEATURES = [
  {
    icon: '⚡',
    title: 'Respostas Instantâneas',
    description:
      'IA treinada para responder seus clientes em segundos, 24 horas por dia, 7 dias por semana. Nunca mais perca uma venda por demora no atendimento.'
  },
  {
    icon: '🎯',
    title: 'Qualificação de Leads',
    description:
      'Identifica automaticamente quem está pronto para comprar. Filtra curiosos e envia leads quentes direto para sua equipe de vendas.'
  },
  {
    icon: '📊',
    title: 'Dashboard Completo',
    description:
      'Acompanhe métricas em tempo real: atendimentos, conversões, satisfação do cliente e performance do bot em um painel intuitivo.'
  },
  {
    icon: '🧠',
    title: 'IA que Aprende',
    description:
      'Quanto mais usa, melhor fica. O Dear Bot aprende com cada interação e melhora suas respostas continuamente.'
  },
  {
    icon: '🔗',
    title: 'Integrações Poderosas',
    description:
      'Conecta com CRM, Google Sheets, Calendly, sistemas de pagamento e muito mais. Automatize todo seu fluxo de vendas.'
  },
  {
    icon: '🛡️',
    title: 'Seguro e Confiável',
    description:
      'Dados criptografados, servidores seguros e conformidade total com LGPD. Seus dados e os de seus clientes estão protegidos.'
  }
]

export const STEPS = [
  {
    number: '01',
    title: 'Conecte seu WhatsApp',
    description:
      'Basta escanear um QR Code. Em menos de 2 minutos seu WhatsApp está conectado ao Dear Bot.'
  },
  {
    number: '02',
    title: 'Configure sua IA',
    description:
      'Ensine o bot sobre seu negócio, produtos, preços e regras de atendimento. Sem código, tudo via painel intuitivo.'
  },
  {
    number: '03',
    title: 'Ative e Venda',
    description:
      'Pronto! Seu atendimento agora funciona 24/7. Acompanhe resultados em tempo real no dashboard.'
  }
]

export const TESTIMONIALS = [
  {
    name: 'Marcos Silva',
    role: 'CEO, TechStore',
    text: 'O Dear Bot triplicou nossas vendas pelo WhatsApp no primeiro mês. A IA responde melhor que muitos atendentes humanos.',
    rating: 5
  },
  {
    name: 'Ana Beatriz',
    role: 'Diretora, Clínica Estética Belle',
    text: 'Reduzi 80% do tempo de atendimento. Agora foco no que importa enquanto o bot cuida dos agendamentos.',
    rating: 5
  },
  {
    name: 'Ricardo Oliveira',
    role: 'Fundador, Imóveis RO',
    text: 'Antes perdia leads à noite e nos finais de semana. Com o Dear Bot, cada lead é atendido na hora. Meu faturamento subiu 40%.',
    rating: 5
  }
]

export const STATS = [
  { value: '500+', label: 'Empresas ativas' },
  { value: '2M+', label: 'Mensagens/mês' },
  { value: '98%', label: 'Satisfação' },
  { value: '<3s', label: 'Tempo de resposta' }
]

export const FAQ = [
  {
    question: 'Preciso de conhecimento técnico para usar?',
    answer:
      'Não! O Dear Bot foi feito para ser simples. Você configura tudo pelo painel, sem escrever uma linha de código.'
  },
  {
    question: 'Funciona com WhatsApp Business?',
    answer:
      'Sim, funciona tanto com WhatsApp pessoal quanto com WhatsApp Business. A conexão é feita via QR Code em poucos minutos.'
  },
  {
    question: 'A IA consegue entender áudios e imagens?',
    answer:
      'Sim! O Dear Bot processa áudios, imagens e documentos enviados pelos clientes, respondendo de forma inteligente a cada tipo de mídia.'
  },
  {
    question: 'Posso transferir para um atendente humano?',
    answer:
      'Claro! A qualquer momento o bot pode transferir a conversa para um atendente humano. Você define as regras de quando isso acontece.'
  },
  {
    question: 'Meus dados ficam seguros?',
    answer:
      'Totalmente. Usamos criptografia de ponta a ponta, servidores seguros e seguimos todas as diretrizes da LGPD.'
  }
]
