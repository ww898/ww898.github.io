// WinDbg x86/x64 disassembler output brush for Syntax Highlighter (10.11.2012)
// Copyright (C) 2012 Mikhail Pilin
// This software is freely used but, distributed only from here http://pilin.name/scripts/shBrushWinDbgDisasm.js

SyntaxHighlighter.brushes.WinDbgDisasm=function()
{
  var r="rax eax ax al ah rbx ebx bx bl bh rcx ecx cx cl ch rdx edx dx dl dh rsi esi si sil rdi edi di dil rbp ebp bp bpl rsp esp sp spl r0 r0d r0w r0b r1 r1d r1w r1b r2 r2d r2w r2b r3 r3d r3w r3b r4 r4d r4w r4b r5 r5d r5w r5b r6 r6d r6w r6b r7 r7d r7w r7b r8 r8d r8w r8b r9 r9d r9w r9b r10 r10d r10w r10b r11 r11d r11w r11b r12 r12d r12w r12b r13 r13d r13w r13b r14 r14d r14w r14b r15 r15d r15w r15b rip eip ip cs ds ss es fs gs mm0 mm1 mm2 mm3 mm4 mm5 mm6 mm7 xmm0 xmm1 xmm2 xmm3 xmm4 xmm5 xmm6 xmm7 xmm8 xmm9 xmm10 xmm11 xmm12 xmm13 xmm14 xmm15 cr0 cr1 cr2 cr3 cr4 cr5 cr6 cr7 cr8 cr9 cr10 cr11 cr12 cr13 cr14 cr15 dr0 dr1 dr2 dr3 dr4 dr5 dr6 dr7 dr8 dr9 dr10 dr11 dr12 dr13 dr14 dr15 tr0 tr1 tr2 tr3 tr4 tr5 tr6 tr7 st0 st1 st2 st3 st4 st5 st6 st7 iopl efl nv up ei pl zr na po nc";
  var p="byte work dword qword tbyte fword mmword xmmword far near ptr db dw dd dq dt df offset";
  var o="aaa aad aam aas adc add addpd addps addsd addss addsubpd addsubps aesdec aesdeclast aesenc aesenclast aesimc aeskeygenassist and andnpd andnps andpd andps arpl blendpd blendps blendvpd blendvps bound bsf bsr bswap bt btc btr bts call cbtw cbw cdq cdqe clc cld clflush clgi cli cltd cltq clts cmc cmovb cmovbe cmove cmovl cmovle cmovnb cmovnbe cmovne cmovnl cmovnle cmovno cmovnp cmovns cmovo cmovp cmovs cmp cmppd cmpps cmpsb cmpsd cmpsq cmpss cmpsw cmpxchg cmpxchg16b cmpxchg8b comisd comiss cpuid cqo cqto crc32 cvtdq2pd cvtdq2ps cvtpd2dq cvtpd2pi cvtpd2ps cvtpi2pd cvtpi2ps cvtps2dq cvtps2pd cvtps2pi cvtsd2si cvtsd2ss cvtsi2sd cvtsi2ss cvtss2sd cvtss2si cvttpd2dq cvttpd2pi cvttps2dq cvttps2pi cvttsd2si cvttss2si cwd cwde cwtd cwtl daa das dec div divpd divps divsd divss dppd dpps emms enter extractps f2xm1 fabs fadd faddp fbld fbstp fchs fcmovb fcmovbe fcmove fcmovnb fcmovnbe fcmovne fcmovnu fcmovu fcom fcom2 fcomi fcomip fcomp fcomp3 fcomp5 fcompp fcos fdecstp fdiv fdivp fdivr fdivrp femms ffree ffreep fiadd ficom ficomp fidiv fidivr fild fimul fincstp fist fistp fisttp fisub fisubr fld fld1 fldcw fldenv fldl2e fldl2t fldlg2 fldln2 fldpi fldz fmul fmulp fnclex fndisi fneni fninit fnop fnsetpm fpatan fprem fprem1 fptan frndint frstor frstpm fsave fscale fsin fsincos fsqrt fst fstcw fstenv fstp fstp1 fstp8 fstp9 fstsw fsub fsubp fsubr fsubrp ftst fucom fucomi fucomip fucomp fucompp fxam fxch fxch4 fxch7 fxrstor fxsave fxtract fyl2x fyl2xp1 h haddpd haddps hint_nop hlt hsubpd hsubps idiv imul in inc insb insd insertps insw int int1 int3 into invd invlpg invlpga iretd iretq iretw ja jae jb jbe jc jcxz je jecxz jg jge jl jle jmp jna jnae jnb jnbe jnc jne jng jnge jnl jnle jno jnp jns jnz jo jp jpe jpo jrcxz js jz lahf lar lcall lddqu ldmxcsr lds lea leave les lfence lfs lgdt lgs lidt ljmp lldt lmsw lock lodsb lodsd lodsq lodsw loop loope loopne lret lsl lss ltr maskmovdqu maskmovq maxpd maxps maxsd maxss mfence minpd minps minsd minss monitor mov movapd movaps movd movddup movdq2q movdqa movdqu movhlps movhpd movhps movlhps movlpd movlps movmskpd movmskps movntdq movntdqa movnti movntpd movntps movntq movq movq2dq movsb movsd movshdup movsldup movsq movss movsw movsx movsxd movupd movups movzx mpsadbw mul mulpd mulps mulsd mulss mwait neg nop not or orpd orps out outsb outsd outsw pabsb pabsd pabsw packssdw packsswb packusdw packuswb paddb paddd paddq paddsb paddsw paddusb paddusw paddw palignr pand pandn pause pavgb pavgw pblendvb pblendw pclmulhqhqdq pclmulhqlqdq pclmullqhqdq pclmullqlqdq pclmulqdq pcmpeqb pcmpeqd pcmpeqq pcmpeqw pcmpestri pcmpestrm pcmpgtb pcmpgtd pcmpgtq pcmpgtw pcmpistri pextrb pextrd pextrq pextrw phaddd phaddsw phaddw phminposuw phsubd phsubsw phsubw pinsrb pinsrd pinsrq pinsrw pmaddubsw pmaddwd pmaxsb pmaxsd pmaxsw pmaxub pmaxud pmaxuw pminsb pminsd pminsw pminub pminud pminuw pmovmskb pmovsxbd pmovsxbq pmovsxbw pmovsxdq pmovsxwd pmovsxwq pmovzxbd pmovzxbq pmovzxbw pmovzxdq pmovzxwd pmovzxwq pmuldq pmulhrsw pmulhuw pmulhw pmulld pmullw pmuludq pop popa popad popcnt popf popfd popfq por prefetchNTA prefetchT0 prefetchT1 prefetchT2 psadbw pshufb pshufd pshufhw pshuflw pshufw psignb psignd psignw pslld pslldq psllq psllw psrad psraw psrld psrldq psrlq psrlw psubb psubd psubq psubsb psubsw psubusb psubusw psubw ptest punpckhbw punpckhdq punpckhqdq punpckhwd punpcklbw punpckldq punpcklqdq punpcklwd push pusha pushad pushf pushfd pushfq pxor rcl rcpps rcpss rcr rdmsr rdpmc rdtsc rdtscp rep repne ret retf retn rol ror roundpd roundps roundsd roundss rsm rsqrtps rsqrtss sahf sal salc sar sbb scasb scasd scasq scasw setb setbe sete setl setle setnb setnbe setne setnl setnle setno setnp setns seto setp sets sfence sgdt shl shld shr shrd shufpd shufps sidt skinit sldt smsw sqrtpd sqrtps sqrtsd sqrtss stc std stgi sti stmxcsr stosb stosd stosq stosw str sub subpd subps subsd subss swapgs syscall sysenter sysexit sysret test ucomisd ucomiss ud2 unpckhpd unpckhps unpcklpd unpcklps verr verw vmcall vmclear vmlaunch vmload vmmcall vmptrld vmptrst vmread vmresume vmrun vmsave vmwrite vmxoff vmxon wait wbinvd wrmsr xadd xchg xgetbv xlatb xor xorpd xorps xrstor xsave xsetbv";
  this.regexList=
  [
    {regex:/;.*$/gm,css:"comments"},
    {regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},
    {regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},
    {regex:new RegExp(this.getKeywords(r),"gmi"),css:"variable bold"},
    {regex:new RegExp(this.getKeywords(o),"gmi"),css:"functions bold"},
    {regex:new RegExp(this.getKeywords(p),"gmi"),css:"keyword"},
    {regex:/\b(0x)?[0-9a-f`]+h?\b/gmi,css:"color1 bold"},
  ]
};
SyntaxHighlighter.brushes.WinDbgDisasm.prototype=new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.WinDbgDisasm.aliases=["windbg","windbg_x86","windbg_x64"];