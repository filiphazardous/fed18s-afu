# Övning 2
## Github och SSH-nycklar
* Öppna terminalen
* Kör `ls ~/.ssh`
* Om du har filer i katalogen`.ssh` (i synnerhet om du har `id_rsa` och `id_rsa.pub`) så ska du hoppa över nästa steg
* Kör `ssh-keygen -t rsa -b 4096 -C "din-epost@din-domain.com"`
* Öppna `https://github.com` i din webb-läsare och logga in
* Klicka på din avatar (övre högra hörnet)
* Klicka på "Settings" och sedan på "SSH and GPG keys"
* Klicka på "New SSH key"
* Get nyckeln ett namn (t ex "mitt-namn-laptop")
* Kör `cat id_rsa.pub` i terminalen
* Kopiera textumatningen till fältet "Key" och klicka på "Add SSH key"

*Obs!*  
Filen `id_rsa.pub` får och ska kopieras till alla platser där du vill
använda den. Men filen `id_rsa` får *aldrig* lämna din dator (den ska helst inte
ens säkerhetskopieras). Om du blir av med datorn, så *ska* du ta bort pub-nyckeln från
Github (och alla andra ställen du använt den).  
Din arbetsgivare kommer bli väldigt irriterad om utomstående skickar in ändringar
av er kod i ditt namn efter att du blivit av med laptopen på tunnelbanan.
