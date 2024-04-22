import{w as ln,c as L}from"./path-CbwjOpE9.js";import{aK as an,aL as U,aM as O,aN as rn,aO as y,aG as on,aP as z,aQ as _,aR as un,aS as t,aT as sn,aU as tn,aV as fn}from"./mermaid.core-BE0PLPqK.js";function cn(l){return l.innerRadius}function yn(l){return l.outerRadius}function gn(l){return l.startAngle}function mn(l){return l.endAngle}function pn(l){return l&&l.padAngle}function dn(l,h,D,S,v,R,M,a){var E=D-l,i=S-h,n=M-v,m=a-R,r=m*E-n*i;if(!(r*r<y))return r=(n*(h-R)-m*(l-v))/r,[l+r*E,h+r*i]}function W(l,h,D,S,v,R,M){var a=l-D,E=h-S,i=(M?R:-R)/z(a*a+E*E),n=i*E,m=-i*a,r=l+n,s=h+m,f=D+n,c=S+m,N=(r+f)/2,o=(s+c)/2,p=f-r,g=c-s,A=p*p+g*g,T=v-R,P=r*c-f*s,G=(g<0?-1:1)*z(fn(0,T*T*A-P*P)),I=(P*g-p*G)/A,K=(-P*p-g*G)/A,w=(P*g+p*G)/A,d=(-P*p+g*G)/A,x=I-N,e=K-o,u=w-N,Q=d-o;return x*x+e*e>u*u+Q*Q&&(I=w,K=d),{cx:I,cy:K,x01:-n,y01:-m,x11:I*(v/T-1),y11:K*(v/T-1)}}function vn(){var l=cn,h=yn,D=L(0),S=null,v=gn,R=mn,M=pn,a=null,E=ln(i);function i(){var n,m,r=+l.apply(this,arguments),s=+h.apply(this,arguments),f=v.apply(this,arguments)-rn,c=R.apply(this,arguments)-rn,N=un(c-f),o=c>f;if(a||(a=n=E()),s<r&&(m=s,s=r,r=m),!(s>y))a.moveTo(0,0);else if(N>on-y)a.moveTo(s*U(f),s*O(f)),a.arc(0,0,s,f,c,!o),r>y&&(a.moveTo(r*U(c),r*O(c)),a.arc(0,0,r,c,f,o));else{var p=f,g=c,A=f,T=c,P=N,G=N,I=M.apply(this,arguments)/2,K=I>y&&(S?+S.apply(this,arguments):z(r*r+s*s)),w=_(un(s-r)/2,+D.apply(this,arguments)),d=w,x=w,e,u;if(K>y){var Q=sn(K/r*O(I)),B=sn(K/s*O(I));(P-=Q*2)>y?(Q*=o?1:-1,A+=Q,T-=Q):(P=0,A=T=(f+c)/2),(G-=B*2)>y?(B*=o?1:-1,p+=B,g-=B):(G=0,p=g=(f+c)/2)}var V=s*U(p),j=s*O(p),C=r*U(T),F=r*O(T);if(w>y){var H=s*U(g),J=s*O(g),X=r*U(A),Y=r*O(A),q;if(N<an)if(q=dn(V,j,X,Y,H,J,C,F)){var Z=V-q[0],$=j-q[1],k=H-q[0],b=J-q[1],nn=1/O(tn((Z*k+$*b)/(z(Z*Z+$*$)*z(k*k+b*b)))/2),en=z(q[0]*q[0]+q[1]*q[1]);d=_(w,(r-en)/(nn-1)),x=_(w,(s-en)/(nn+1))}else d=x=0}G>y?x>y?(e=W(X,Y,V,j,s,x,o),u=W(H,J,C,F,s,x,o),a.moveTo(e.cx+e.x01,e.cy+e.y01),x<w?a.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(u.y01,u.x01),!o):(a.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(e.y11,e.x11),!o),a.arc(0,0,s,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),!o),a.arc(u.cx,u.cy,x,t(u.y11,u.x11),t(u.y01,u.x01),!o))):(a.moveTo(V,j),a.arc(0,0,s,p,g,!o)):a.moveTo(V,j),!(r>y)||!(P>y)?a.lineTo(C,F):d>y?(e=W(C,F,H,J,r,-d,o),u=W(V,j,X,Y,r,-d,o),a.lineTo(e.cx+e.x01,e.cy+e.y01),d<w?a.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(u.y01,u.x01),!o):(a.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(e.y11,e.x11),!o),a.arc(0,0,r,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),o),a.arc(u.cx,u.cy,d,t(u.y11,u.x11),t(u.y01,u.x01),!o))):a.arc(0,0,r,T,A,o)}if(a.closePath(),n)return a=null,n+""||null}return i.centroid=function(){var n=(+l.apply(this,arguments)+ +h.apply(this,arguments))/2,m=(+v.apply(this,arguments)+ +R.apply(this,arguments))/2-an/2;return[U(m)*n,O(m)*n]},i.innerRadius=function(n){return arguments.length?(l=typeof n=="function"?n:L(+n),i):l},i.outerRadius=function(n){return arguments.length?(h=typeof n=="function"?n:L(+n),i):h},i.cornerRadius=function(n){return arguments.length?(D=typeof n=="function"?n:L(+n),i):D},i.padRadius=function(n){return arguments.length?(S=n==null?null:typeof n=="function"?n:L(+n),i):S},i.startAngle=function(n){return arguments.length?(v=typeof n=="function"?n:L(+n),i):v},i.endAngle=function(n){return arguments.length?(R=typeof n=="function"?n:L(+n),i):R},i.padAngle=function(n){return arguments.length?(M=typeof n=="function"?n:L(+n),i):M},i.context=function(n){return arguments.length?(a=n??null,i):a},i}export{vn as a};
