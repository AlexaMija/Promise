import function.js from "./function";
/* Napravviti mali simulator borbe izmedju n<=5 jedinica medjusobom.
Jedinice poseduju sledece propertije
u zagradi je definisana vrednost i kako se racuna date property
- name
- health = (100)
- rechargeTime = (1000, healt/100)
- damage = (healt/100)
- criticalChance(10 - healt/10)
Da bi jedinica napala potrebno je da se ispuni rechargeTime. Pri
svakom napadu jedinica napada bilo koju drugu random jedinicu koja ima
healt > 0.
Napomena:
U pitanju je asinhrono ponasanje, svaka jedinca napada onda kada se
recharguje.Svaka jedinica moze da bude napadnuta dok napada.
Svaka jedinica koja napadne samo deliveruje damage,ne dobija nikakav damage.
Critical chance se racuna tako sto je criticalChance >= random(0, 100);
Ako je ispunjen uslov za CriticalChance, damage u tom trenutku je dupliran.
Borba traje dok su minumum 2 jedinice zive.*/
