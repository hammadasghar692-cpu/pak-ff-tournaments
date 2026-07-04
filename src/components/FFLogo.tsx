import React, { useState, useEffect } from 'react';
import customLogo from '../images/logo.png.png';

interface FFLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export default function FFLogo({ className = '', size = 120, showText = false }: FFLogoProps) {
  const [useCustom, setUseCustom] = useState(true);

  if (useCustom) {
    return (
      <img
        src={customLogo}
        alt="FF Tournament"
        width={size}
        height={size}
        style={{ width: size, height: size, objectFit: 'contain' }}
        className={`select-none ${className}`}
        referrerPolicy="no-referrer"
        onError={() => setUseCustom(false)}
      />
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none ${className}`}
    >
      <defs>
        {/* Rich Metallic Gold Gradients */}
        <linearGradient id="gold-metal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF2A3" />
          <stop offset="25%" stopColor="#D4AF37" />
          <stop offset="50%" stopColor="#AA7C11" />
          <stop offset="75%" stopColor="#F3E5AB" />
          <stop offset="100%" stopColor="#AA7C11" />
        </linearGradient>

        <linearGradient id="gold-shine" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#8A6623" />
          <stop offset="30%" stopColor="#FFDF73" />
          <stop offset="50%" stopColor="#FFF5D1" />
          <stop offset="70%" stopColor="#FFDF73" />
          <stop offset="100%" stopColor="#8A6623" />
        </linearGradient>

        <linearGradient id="gold-dark" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E5C158" />
          <stop offset="50%" stopColor="#96721E" />
          <stop offset="100%" stopColor="#5E4510" />
        </linearGradient>

        {/* Steel / Dark Metal Gradients */}
        <linearGradient id="steel-dark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2D2D30" />
          <stop offset="50%" stopColor="#121214" />
          <stop offset="100%" stopColor="#050505" />
        </linearGradient>

        <linearGradient id="steel-light" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5C5C64" />
          <stop offset="50%" stopColor="#252528" />
          <stop offset="100%" stopColor="#151518" />
        </linearGradient>

        {/* Fire & Flame Gradients */}
        <linearGradient id="fire-gradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#FF1F00" stopOpacity="0.8" />
          <stop offset="40%" stopColor="#FF6A00" />
          <stop offset="80%" stopColor="#FFD200" />
          <stop offset="100%" stopColor="#FFFFFF" />
        </linearGradient>

        <linearGradient id="fire-glow" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#FF3C00" stopOpacity="0" />
          <stop offset="50%" stopColor="#FF7A00" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FFE600" stopOpacity="0.9" />
        </linearGradient>

        {/* Drop Shadows and Filters */}
        <filter id="esports-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="12" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        <filter id="fire-blur" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="18" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* BACKGROUND GLOW */}
      <circle cx="250" cy="220" r="130" fill="url(#fire-glow)" filter="url(#fire-blur)" />

      {/* ==================== THE FLAMES (Top central fire) ==================== */}
      <g filter="url(#esports-glow)">
        {/* Back Outer Flame */}
        <path
          d="M 250 50 C 210 110, 200 160, 210 190 C 215 200, 235 190, 240 180 C 235 210, 245 230, 255 240 C 265 230, 275 210, 270 180 C 275 190, 295 200, 300 190 C 310 160, 300 110, 260 50 C 255 42, 245 42, 250 50 Z"
          fill="url(#fire-gradient)"
          opacity="0.85"
        />
        {/* Core Inner Flame */}
        <path
          d="M 250 75 C 225 120, 220 155, 225 180 C 228 185, 240 180, 243 172 C 240 195, 247 210, 254 218 C 261 210, 268 195, 265 172 C 268 180, 280 185, 283 180 C 288 155, 283 120, 258 75 C 255 70, 247 70, 250 75 Z"
          fill="#FFF6BD"
        />
      </g>

      {/* ==================== WINGS (Left & Right) ==================== */}
      {/* Left Wing */}
      <g id="left-wing">
        {/* Wing Feather 1 (Top) */}
        <path d="M 210 150 L 110 130 C 80 150, 60 200, 80 250 L 150 240 Z" fill="url(#gold-metal)" stroke="url(#gold-shine)" strokeWidth="2" />
        {/* Wing Feather 2 */}
        <path d="M 200 190 L 95 185 C 70 215, 60 265, 85 315 L 150 280 Z" fill="url(#gold-dark)" stroke="url(#gold-shine)" strokeWidth="1.5" />
        {/* Wing Feather 3 */}
        <path d="M 195 230 L 90 240 C 70 275, 75 325, 105 370 L 160 320 Z" fill="url(#gold-metal)" stroke="url(#gold-shine)" strokeWidth="2" />
        {/* Wing Feather 4 (Bottom-most wing element) */}
        <path d="M 190 270 L 105 310 C 90 345, 100 395, 135 425 L 180 360 Z" fill="url(#gold-dark)" stroke="url(#gold-shine)" strokeWidth="1.5" />
      </g>

      {/* Right Wing (Symmetrical mirror) */}
      <g id="right-wing" transform="translate(500, 0) scale(-1, 1)">
        {/* Wing Feather 1 (Top) */}
        <path d="M 210 150 L 110 130 C 80 150, 60 200, 80 250 L 150 240 Z" fill="url(#gold-metal)" stroke="url(#gold-shine)" strokeWidth="2" />
        {/* Wing Feather 2 */}
        <path d="M 200 190 L 95 185 C 70 215, 60 265, 85 315 L 150 280 Z" fill="url(#gold-dark)" stroke="url(#gold-shine)" strokeWidth="1.5" />
        {/* Wing Feather 3 */}
        <path d="M 195 230 L 90 240 C 70 275, 75 325, 105 370 L 160 320 Z" fill="url(#gold-metal)" stroke="url(#gold-shine)" strokeWidth="2" />
        {/* Wing Feather 4 */}
        <path d="M 190 270 L 105 310 C 90 345, 100 395, 135 425 L 180 360 Z" fill="url(#gold-dark)" stroke="url(#gold-shine)" strokeWidth="1.5" />
      </g>

      {/* ==================== THE SHIELD CREST ==================== */}
      {/* Outer Golden Border Shield */}
      <polygon
        points="250,110 390,165 370,365 250,450 130,365 110,165"
        fill="url(#gold-dark)"
        stroke="url(#gold-shine)"
        strokeWidth="6"
        filter="url(#esports-glow)"
      />

      {/* Inner Metallic Steel Shield Layer */}
      <polygon
        points="250,125 372,175 354,352 250,432 146,352 128,175"
        fill="url(#steel-dark)"
        stroke="url(#steel-light)"
        strokeWidth="4"
      />

      {/* Shield Inner Inset Detail / Shadows */}
      <polygon
        points="250,140 355,185 338,340 250,415 162,340 145,185"
        fill="#0A0A0C"
        opacity="0.85"
      />

      {/* Golden Highlight Trim Inside */}
      <polygon
        points="250,150 340,192 325,325 250,395 175,325 160,192"
        fill="none"
        stroke="url(#gold-shine)"
        strokeWidth="1.5"
        opacity="0.6"
      />

      {/* ==================== THE TROPHY (Centerpiece) ==================== */}
      <g id="trophy-group">
        {/* Trophy Base */}
        <path
          d="M 210 330 L 290 330 L 285 350 L 215 350 Z"
          fill="url(#gold-dark)"
          stroke="url(#gold-shine)"
          strokeWidth="1.5"
        />
        <path
          d="M 195 350 L 305 350 L 300 365 L 200 365 Z"
          fill="url(#gold-metal)"
          stroke="url(#gold-shine)"
          strokeWidth="1"
        />

        {/* Trophy Stem */}
        <path
          d="M 235 280 L 265 280 L 258 330 L 242 330 Z"
          fill="url(#gold-dark)"
          stroke="url(#gold-shine)"
          strokeWidth="1.5"
        />

        {/* Trophy Bowl / Cup */}
        <path
          d="M 180 175 L 320 175 L 300 280 L 200 280 Z"
          fill="url(#steel-light)"
          stroke="url(#gold-shine)"
          strokeWidth="3.5"
        />

        {/* Cup Face Insets (Angular futuristic shards) */}
        <polygon points="200,185 250,185 245,270 208,270" fill="url(#steel-dark)" />
        <polygon points="250,185 300,185 292,270 255,270" fill="url(#steel-light)" />
        <polygon points="220,195 280,195 275,255 225,255" fill="none" stroke="url(#gold-shine)" strokeWidth="2" />

        {/* Trophy Handles (Left and Right) */}
        {/* Left Handle */}
        <path
          d="M 180 190 Q 140 195 150 235 Q 160 265 200 260 M 180 205 Q 160 210 165 230 Q 170 245 200 245"
          fill="url(#gold-metal)"
          stroke="url(#gold-shine)"
          strokeWidth="1"
        />
        {/* Right Handle */}
        <path
          d="M 320 190 Q 360 195 350 235 Q 340 265 300 260 M 320 205 Q 340 210 335 230 Q 330 245 300 245"
          fill="url(#gold-metal)"
          stroke="url(#gold-shine)"
          strokeWidth="1"
        />
      </g>

      {/* ==================== THE TITLE TEXT BANNER ==================== */}
      {/* Curved Esports Ribbon Plate */}
      <polygon
        points="100,355 400,355 415,400 380,410 250,440 120,410 85,400"
        fill="url(#steel-dark)"
        stroke="url(#gold-shine)"
        strokeWidth="4"
        filter="url(#esports-glow)"
      />

      {/* Ribbon Inner Dark Board */}
      <polygon
        points="110,363 390,363 400,393 250,428 100,393"
        fill="#050507"
      />

      {/* "FF" TEXT */}
      <text
        x="250"
        y="320"
        fontFamily="'Orbitron', sans-serif"
        fontWeight="900"
        fontSize="52"
        fill="url(#gold-shine)"
        textAnchor="middle"
        letterSpacing="6"
        style={{ textShadow: '0 0 15px rgba(255, 215, 0, 0.6)' }}
      >
        FF
      </text>

      {/* "TOURNAMENT" TEXT */}
      <text
        x="250"
        y="395"
        fontFamily="'Orbitron', sans-serif"
        fontWeight="900"
        fontSize="30"
        fill="url(#gold-shine)"
        textAnchor="middle"
        letterSpacing="4"
        style={{ textShadow: '0 0 10px rgba(255, 122, 0, 0.8)' }}
      >
        TOURNAMENT
      </text>

      {/* Decorative Golden Rivets / Bolts on Ribbon */}
      <circle cx="115" cy="378" r="4" fill="url(#gold-metal)" />
      <circle cx="385" cy="378" r="4" fill="url(#gold-metal)" />
    </svg>
  );
}
