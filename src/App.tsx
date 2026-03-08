/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Heart, Star, Sparkles, Quote, Camera, Video, ChevronDown, Calendar } from 'lucide-react';

// Inspirational Quotes in Portuguese
const quotes = [
  {
    text: "Mulher: a força que move o mundo e o amor que sustenta a vida.",
    author: "Homenagem ao 08 de Março"
  },
  {
    text: "Kézia, você é a definição de guerreira. Sua luz brilha em cada passo e seu amor como mãe é infinito.",
    author: "Com Admiração"
  },
  {
    text: "Ser mulher é ser princesa aos 20, rainha aos 30, imperatriz aos 40 e sábia a vida inteira.",
    author: "Provérbio"
  },
  {
    text: "Mãe é o nome de Deus nos lábios e corações das crianças. Sua dedicação é o que faz o mundo girar.",
    author: "Homenagem à Kézia"
  }
];

// DICA PARA O USUÁRIO:
// Para usar as fotos do files.fm (https://files.fm/u/69rmth7nqp):
// 1. Abra a imagem no site files.fm
// 2. Clique com o botão direito na imagem e selecione "Copiar endereço da imagem"
// 3. Cole o link no campo 'url' abaixo. O link deve começar com 'https://fv...' ou 'https://files.fm/f/...'

// Placeholder images - using seeds that suggest family, strength, and beauty
const galleryImages = [
  { url: "https://fv5-4.files.fm/thumb_show.php?i=fjefg62f3r&view&v=1&PHPSESSID=d995b470bca9faf98fd24b0d5be1fb3fe58d4264/800/1000", title: "Momentos de Amor" },
  { url: "https://fv5-4.files.fm/thumb_show.php?i=cscpe85aae&view&v=1&PHPSESSID=d995b470bca9faf98fd24b0d5be1fb3fe58d4264/800/600", title: "Guerreira" },
  { url: "https://fv5-4.files.fm/thumb_show.php?i=yfschdc22m&view&v=1&PHPSESSID=d995b470bca9faf98fd24b0d5be1fb3fe58d4264/800/1200", title: "Mãe Perfeita" },
  { url: "https://fv5-4.files.fm/thumb_show.php?i=bepx8bsvdx&view&v=1&PHPSESSID=d995b470bca9faf98fd24b0d5be1fb3fe58d4264/800/800", title: "Luz Própria" },
  { url: "https://fv5-4.files.fm/thumb_show.php?i=ew7tjbc84f&view&v=1&PHPSESSID=d995b470bca9faf98fd24b0d5be1fb3fe58d4264/800/1000", title: "Essência" },
  { url: "https://fv5-4.files.fm/thumb_show.php?i=xq94s62jgb&view&v=1&PHPSESSID=d995b470bca9faf98fd24b0d5be1fb3fe58d4264/800/600", title: "Cuidado" },
];

// Video placeholders - in a real app, these would be direct links to .mp4 files
const videos = [
  { url: "#", title: "Sorrisos em Família", thumb: "https://fv5-4.files.fm/thumb_video_picture.php?i=7cq3utwnqr&PHPSESSID=d995b470bca9faf98fd24b0d5be1fb3fe58d4264/800/450" },
  { url: "#", title: "Alegria de Viver", thumb: "https://fv5-4.files.fm/thumb_show.php?i=fjefg62f3r&view&v=1&PHPSESSID=d995b470bca9faf98fd24b0d5be1fb3fe58d4264/800/450" },
];

export default function App() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#2D241E] font-serif selection:bg-[#E6D5C3]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ opacity, scale }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/20 z-10" />
          <img 
            src="https://picsum.photos/seed/kezia-hero/1920/1080?blur=2" 
            alt="Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="relative z-20 text-center px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="inline-block text-sm uppercase tracking-[0.3em] text-white/90 mb-6 font-sans font-semibold">
              08 de Março • Dia Internacional da Mulher
            </span>
            <h1 className="text-7xl md:text-9xl font-light text-white mb-8 leading-tight">
              Kézia
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light italic max-w-2xl mx-auto leading-relaxed">
              Mulher, Mãe, Guerreira. Uma homenagem à perfeição que existe em sua força e doçura.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <ChevronDown className="w-8 h-8 text-white animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 px-6 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Sparkles className="w-8 h-8 mx-auto mb-8 text-[#C4A484]" />
          <h2 className="text-4xl md:text-5xl font-light mb-8 text-[#4A3728]">
            Uma Mulher Extraordinária
          </h2>
          <p className="text-lg md:text-xl text-[#6B5A4D] leading-relaxed font-light">
            Neste dia especial, celebramos não apenas uma data, mas a existência de alguém que transforma o mundo ao seu redor. Kézia, sua jornada é um exemplo de resiliência e amor incondicional.
          </p>
        </motion.div>
      </section>

      {/* Quote Section */}
      <section className="bg-[#F5F2ED] py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://fv5-4.files.fm/thumb_show.php?i=fjefg62f3r&view&v=1&PHPSESSID=d995b470bca9faf98fd24b0d5be1fb3fe58d4264/800/1067" 
                  alt="Motherhood" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#E6D5C3] rounded-full flex items-center justify-center shadow-lg">
                <Heart className="w-12 h-12 text-[#4A3728]" fill="currentColor" />
              </div>
            </motion.div>

            <div className="space-y-12">
              {quotes.slice(0, 2).map((quote, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="bg-white p-10 rounded-3xl shadow-sm border border-[#E6D5C3]/30"
                >
                  <Quote className="w-8 h-8 text-[#C4A484] mb-6" />
                  <p className="text-2xl italic text-[#4A3728] leading-snug mb-6">
                    "{quote.text}"
                  </p>
                  <p className="text-sm uppercase tracking-widest text-[#C4A484] font-sans font-bold">
                    — {quote.author}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-[#C4A484] font-sans font-bold uppercase tracking-widest text-sm">Galeria de Memórias</span>
              <h2 className="text-5xl font-light mt-2 text-[#4A3728]">Momentos Preciosos</h2>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-[#6B5A4D] font-sans text-sm">
                <Camera className="w-4 h-4" />
                <span>Fotos</span>
              </div>
              <div className="flex items-center gap-2 text-[#6B5A4D] font-sans text-sm">
                <Video className="w-4 h-4" />
                <span>Vídeos</span>
              </div>
            </div>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {galleryImages.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group cursor-pointer break-inside-avoid"
              >
                <div className="overflow-hidden rounded-2xl shadow-md transition-all duration-500 group-hover:shadow-xl">
                  <img 
                    src={img.url} 
                    alt={img.title} 
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-center justify-center">
                  <p className="text-white text-xl font-light italic">{img.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Highlight Section */}
      <section className="bg-[#2D241E] py-24 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-light mb-8 leading-tight">
                O Brilho de uma <br />
                <span className="italic text-[#E6D5C3]">Guerreira</span>
              </h2>
              <p className="text-lg text-white/70 font-light leading-relaxed mb-8">
                Cada sorriso, cada desafio superado e cada gesto de carinho como mãe constrói o legado de uma mulher que não aceita menos do que a felicidade de quem ama.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Star className="w-6 h-6 text-[#E6D5C3]" />
                  </div>
                  <p className="font-sans text-sm uppercase tracking-widest font-semibold">Força Inabalável</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-[#E6D5C3]" />
                  </div>
                  <p className="font-sans text-sm uppercase tracking-widest font-semibold">Amor de Mãe</p>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videos.map((video, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative aspect-video bg-white/5 rounded-3xl overflow-hidden border border-white/10 flex items-center justify-center group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4A3728] to-[#2D241E] opacity-50" />
                  <img 
                    src={video.thumb} 
                    alt={video.title} 
                    className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 rounded-full bg-[#E6D5C3] flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform shadow-lg">
                      <Video className="w-6 h-6 text-[#2D241E] ml-1" />
                    </div>
                    <p className="text-sm uppercase tracking-widest font-sans font-bold text-[#E6D5C3]">{video.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final Message */}
      <section className="py-32 px-6 text-center bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-block px-4 py-1 bg-[#F5F2ED] rounded-full text-[#C4A484] text-xs font-sans font-bold uppercase tracking-widest mb-8">
            Com Amor
          </div>
          <h2 className="text-5xl md:text-6xl font-light mb-10 text-[#4A3728]">
            Feliz Dia da Mulher, Kézia!
          </h2>
          <p className="text-xl text-[#6B5A4D] font-light italic leading-relaxed mb-12">
            "Que seu dia seja tão radiante quanto seu sorriso e tão profundo quanto seu coração. Você é nossa inspiração diária."
          </p>
          <div className="flex justify-center gap-2">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: i * 0.3 
                }}
              >
                <Heart className="w-6 h-6 text-[#C4A484]" fill="currentColor" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[#E6D5C3]/30 text-center bg-[#FDFCFB]">
        <p className="text-xs uppercase tracking-[0.4em] text-[#C4A484] font-sans font-bold">
          Março 2024 • Celebrando Kézia
        </p>
      </footer>
    </div>
  );
}
