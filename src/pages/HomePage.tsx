import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Domains from '../components/Domains';
import Careers from '../components/Careers';
import VStart from '../components/VStart';
import VCAP from '../components/VCAP';
import Ignite from '../components/Ignite';
import Contact from '../components/Contact';
import MainLayout from '../layouts/MainLayout';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Vibai Innovixs - Reimagining Innovation Together';
    
    // Smooth scroll handling
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (!target.hash || !target.hash.startsWith('#')) return;
      
      e.preventDefault();
      const element = document.querySelector(target.hash);
      if (!element) return;
      
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth'
      });
      
      history.pushState(null, '', target.hash);
    };

    // Intersection Observer for scroll animations
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    document.querySelectorAll('.reveal').forEach(element => {
      observer.observe(element);
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick as unknown as EventListener);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick as unknown as EventListener);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <MainLayout>
      <Hero />
      <div className="reveal">
        <About />
      </div>
      <div className="reveal">
        <Domains />
      </div>
      <div className="reveal">
        <Careers />
      </div>
      <div className="reveal">
        <VCAP />
      </div>
      <div className="reveal">
        <VStart />
      </div>
      <div className="reveal">
        <Ignite />
      </div>
      <div className="reveal">
        <Contact />
      </div>
    </MainLayout>
  );
};

export default HomePage