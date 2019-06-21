import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { TranslateService } from "@ngx-translate/core";
import { HomePage } from './../home/home';
import { HeaderStaffModolPage } from './../header-staff-modol/header-staff-modol';


@IonicPage()
@Component({
  selector: 'page-cafedra',
  templateUrl: 'cafedra.html',
})
export class CafedraPage {
  cafedraInfo = [];
  lang : string;

  constructor(public navCtrl: NavController, public navParams: NavParams , public translate : TranslateService, public modal: ModalController) {
    this.lang = this.translate.getDefaultLang();
    if(this.lang == 'uz') {

      this.cafedraInfo = [

        {
         
         "cafedraName" : "Axborot Texnologiyalari kafedrasi",
         "cafedraShortName" : "AT",
         "cafedraPhoto" : "assets/imgs/AT.png",
         "cafedraPrincipleName" : "Maxmudov Zaynidin Maxamadiyevich",
         "photo" : "assets/imgs/maxmudov_z.jpg",
         "info" : "“Axborot texnologiyalari” kafedrasi 2005 yil avgust oyida “Informatika va axborot texnologiyalari” kafedrasi nomi ostida tashkil topgan. Kafedra tuzilishidan maqsad O‘zbekiston Respublikasiga yuqori malakali amaliy axborot tizimlarini loyihalashtiruvchi, rivojlantiruvchi va zamonaviy axborot texnologiyalari bo‘yicha yetuk bakalavr va magistrlar tayyorlash, o‘quv uslubiy, ilmiy-tadqiqot ishlari olib boruvchi mutaxasislar tayrlashdan iboratdir. Kafedraga o‘sha vaqtlarda texnika fanlari nomzodi dotsent A.B.Qarshiyev mudir etib tayinlandi. A.B. Qarshiyev 2011 yilgacha mudirlik qildi. So‘ngra kafedraga 2011 yildan hozirgacha Axborot texnologiyalari kafedrasi mudiri lavozimida fizika-matematika fanlari nomzodi dotsent Z.M.Maxmudov ishlab kelmoqda. Kafedra tashkil qilinganida 2014 yilgacha qo‘yidagi: Axborot texnologiyalar kafedrasi 3 ta o‘quv laboratoriyasiga ega bo‘lib, ular zamonaviy kompyuterlar, interaktiv multimediali elektron doskalar bilan to‘liq jihozlangan va internet tizimiga ulangan. Kafedra 2005 yil 29 avgustda tashkil qilingan. Kafedra tashkil qilinganda 27,25 shtat birlikda 31 nafar professor-o‘qituvchi faoliyat yuritgan va ilmiy salohiyati 26% tashkil etgan hamda kafedra tomonidan 31 ta fan o‘tilgan. Kafedraga 2005-2010 yillarda dotsent A.B.Qarshiyev, 2011 yildan hozirgacha dotsent Z.M.Maxmudov mudirlik qilib kelmoqda. Hozirgi kunga kelib kafedrada 25,5 shtat birlikda 30 nafar professor-o‘qituvchi faoliyat yuritmoqda va ilmiy salohiyati 20% tashkil etadi hamda kafedra tomonidan 23 ta fan o‘tilayapti. Shundan 2 ta fan doktori professor, 4 nafar dotsent, 8 nafar katta o‘qituvchi hamda 16 nafar assistentlar faoliyat ko‘rsatmoqda. Kafedra professor-o‘qituvchilarining o‘rtacha yoshi 42 ni tashkil qiladi. Barcha professor-o‘qituvchilarning tayanch ma’lumoti kafedra mutaxassisligiga mos.2005 yildan buyon kafedrada I.M.Boynazarov (mavzusi), N.Raximov (mavzusi), lar fan nomzodi darajasiga ega bo‘lishdi. ",
         "tel" : ""
    
        },
        {
         
         "cafedraName" : "Kompyuter tizimlari kafedrasi",
         "cafedraShortName" : "KT",
         "cafedraPhoto" : "assets/imgs/KT.png",
         "cafedraPrincipleName" : "Bekmurodov Qosim Allaberdiyevich",
         "photo" : "assets/imgs/bekmurodov_q.jpg",
         "info" : "‘‘Kompyuter tizimlari” kafedrasi 2013 yil ‘‘Umumkasbiy fanlar” kafedrasi nomi ostida tashkil topgan. Kafedrada jami 19.75 shtat birlikda: 7 nafar dotsent, 9 nafar katta o’qituvchi va 9 nafar assistentlar faoliyat ko’rsatmoqda. Asosiy shtatlarda 16 nafar o’qituvchilar bo’lib, ulardan 4 nafari fan nomzodlari, dotsentlar, 7 nafari katta o’qituvchilar va 5 nafari assistentlardir. O’rindoshlik asosida 3.75 shtat birligi band qilingan, shu jumladan filial xodimlari tomonidan 3.5 shtat birlik va SamDU dan jalb qilingan 1 nafar dotsent tomonidan 0.25 shtat birlik, Kafedrada dars berayotgan 25 nafar professor - o’qituvchilardan 9 nafari ilmiy darajali (9 nafar fan nomzodlari) bo’lib, 36% ni tashkil qiladi. Asosiy shtatlarga nisbatan ilmiy saloxiyat (6/16)*100=37.5 % ni tashkil qiladi. Kafedraning o’rtacha yoshi 38 yoshda.         Kafedrada olib borilayotgan ilmiy ishlar:         Ishlar nomi va sharti: ‘‘Anizotrop elektr o’tkazuvchanlikni hisobga olgan holda to’k tashuvchi anizotrop qobiqlar elektromagnitoelastikligi bog’liqli chiziqlimas masalalarini yechish metodikasi, algoritmi va dasturiy ta’minotini yaratish’‘ (fundamental) – Indiaminov R.Sh. (2012-2016). Informatika va axborot texnologiyalari va kasb ta’limi (Informatika va axborot texnologiyalari) ta’lim yo’nalishlaridagi Intellektual tizimlar fanidan o’quv-uslubiy majmualar yaratish (amaliy) – Bekmurodov Q.A. (2012-2013)"
    
        },
        {
         
         "cafedraName" : "Dasturiy injiniringi kafedrasi",
         "cafedraShortName" : "DI",
         "cafedraPhoto" : "assets/imgs/DI.png",
         "cafedraPrincipleName" : "Qarshiyev Abduvali Berkinovich",
         "photo" : "assets/imgs/qarshiyev_.jpg",
         "info" : "‘‘Dasturiy injiniring’‘ kafedrasi 2015 - yil yanvar oyida ‘‘Dasturiy injinering’‘ kafedrasi nomi ostida tashkil topgan va Kompyuter injinering fakulteti negizida 2015 yil yanvar oyida ish faoliyatini boshladi. Kafedra tuzilishidan maqsad  O'zbekiston Respublikasiga yuqori malakali amaliy axborot tizimlarini loyixalashtiruvchi, rivojlantiruvchi va zamonaviy axborot texnologiyalari  bo’yicha yetuk bakalavr va magistrlar tayorlash, o’quv uslubiy, ilmiy tadqiqot, ishlari olib borish asosiy vazifalar etib belgilandi mutaxasislar tayorlashdan iboratdir. O‘zbekiston Respublikasi Prezidentining 2013 yil 26 martdagi ‘‘Axborot kommunikatsiya texnologiyalari sohasida kadrlar tayyorlash tizimini yanada takomillashtirish chora-tadbirlari to‘g‘risida”gi PQ - 1942 - son qarori asosidagi Vazirlar Mahkamasining 2013 yil 28 iyundagi ‘‘TATU va uning hududiy filiallarining tashkiliy tuzilmasini takomillashtirish to‘g‘risida”gi 188 - son Qarori bilan tasdiqlangan TATU Samarqand filialining yangi strukturasi bo‘yicha 2013 - 2014 o‘quv yilidan boshlab  ’‘kompyuter injinering” fakulteti negizida ‘‘Dasturiy injiniringi” kafedrasi deb nomlana boshladi. Yuqorida ko‘rsatib o‘tilgan qarorlarga muvofiq Toshkent Axborot texnologiyalar Universitetining 2013 yil 29 avgustdagi 905 - buyrug‘i hamda TATU Samarkand filiali Ilmiy Kengashining 2013 yil 31 ",
         "tel" : "Telefon: (+99891) 549-30-89"
        },
        {
         
         "cafedraName" : "Ijtimoiy va gumanitar fanlar kafedrasi",
         "cafedraShortName" : "GIF",
         "cafedraPhoto" : "assets/imgs/GIF.png",
         "cafedraPrincipleName" : "Usmonov Farrux Nasirdinovich",
         "photo" : "assets/imgs/usmonov_f.jpg",
         "info" : "‘‘Gumanitar va ijtimoiy fanlar’‘ kafedrasi 2005 yilning sentyabr oyida Toshkent axborot texnologiyalari universiteti Samarqand filiali tashkil topishi bilan ochilgan kafedralardan biri hisoblanadi. To`qqiz yil davomida kafedrada 30 dan ortiq professor-o`qituvchilar faoliyat olib bordilar. Hozirgi kunda kafedrada 1 ta professor – Yu.N.Abdullayev; 3 ta dosent -  R.S.Mardonov, A.Y.Abduxamidov, D.B.Vafayeva; 5 ta katta o’qituvchi: G.I.Kubayeva, S.A.Isxakova, F.N.Usmonov, B.B.Mardonov, A.S.Gulomova; 4 ta assistent: X.H.Muxammadiyev, A.R.Axmedjonov, Sh.E.Eshonqulov, S.R.Eshmurodovlar ishlab kelmoqdalar. Hozirda kafedrada 12 ta fan o’qitilib kelinmoqda. O’tgan yillar davomida kafedra professor - o’qituvchilari tomonidan 400 dan ortiq ilmiy va o’quv-uslubiy ishlar nashr qilindi. ‘‘Milliy g’oya: asosiy tushunchalar va tamoyillar’‘, ‘‘Geopolitika’‘, ‘‘Pedagogika’‘, ‘‘Madaniyatshunoslik’‘, ‘‘Iqtisodiyot nazariyasi” va boshqa fanlardan multimediali qo’llanmalar yaratildi. ‘‘Milliy g’oya: asosiy tushunchalar va tamoyillar’‘ fanidan yaratilgan xrestomatiya davlat patentini olishga sazovor bo’ldi. Kafedrada olib borilayotgan ilmiy ishlar: ‘‘Gumanitar va ijtimoiy fanlar’‘ kafedrasining ilmiy-tadqiqot ishining mavzusi ‘‘Hozirgi zamon axborot va pedagogik texnologiyalar taraqqiyotining ijtimoiy-iqtisodiy, ma’naviy-axloqiy va falsafiy masalalari’‘.",
         "tel" : ""
        },
        {
         
         "cafedraName" : "Tabiiy fanlar kafedrasi",
         "cafedraShortName" : "TF",
         "cafedraPhoto" : "assets/imgs/TF.png",
         "cafedraPrincipleName" : "Asrorov Shuhrat Abbosovich",
         "photo" : "assets/imgs/asrorov_a.jpg",
         "info" : "O‘zbekiston Respublikasi Prezidentining 2005 yil 2 iyundagi ‘‘Axborot texnologiyalari sohasida kadrlar tayyorlash tizimini takomillashtirish to‘g‘risida’‘gi  91-son qarori asosida Toshkent axborot texnologiyalari universitetining Samarqand filiali tashkil etilgan bo‘lib, ‘‘Tabiiy fanlar” kafedrasi 2005 yil 2 sentyabrdan hozirgi kungacha faoliyat yuritmoqda. ‘‘Tabiiy fanlar’‘ kafedrasining 2014 – 2015 o‘quv yiliga rejalashtirilgan o‘quv ish soatlari hajmi 11304 soat, ilmiy – uslubiy 3054 soat, ilmiy – tadqiqot 2403 soat, tashkiliy – uslubiy 2454 soat, ma’naviy – axloqiy 1346 soatni tashkil qildi. Kafedrada jami 13,25 shtat birlik mavjud bo‘lib, 11 asosiy shtat birlikda 12 nafar kishi ishlaydi. Shundan 5,0 sh.b.da 5 nafar dosent, 3 sh.b.da 3 nafar katta o‘qituvchi va 3 sh.b da 4 nafar assistentlar faoliyat ko‘rsatmoqda. Kafedraning ilmiy salohiyati 45 foiz (asosiy shtatdagi professor o‘qituvchilar bo‘yicha) bo‘lib, o‘rtacha 47 yoshni tashkil etadi. Kafedrada 3 nafar o‘qituvchi doktorlik dissertasiyasi ustida ish olib bormoqda. Kafedra professor – o‘qituvchilari tomonidan chop etgan maqolalar va uslubiy ishlar soni. Tabiiy fanlar kafedrasi professor – o‘qituvchilari 2012 - 2015 o‘quv yilida quyidagi mavzularda 38 ta ilmiy maqolalar, 2 ta o‘quv qo‘llanma va 11 ta o‘quv-uslubiy qo‘llanmalar chop etishdi. Yaxshiboyev M.U. O‘zbekiston Respublikasi Oliy va o‘rta maxsus ta’lim vazirligi tavsiyasi bilan 5 ta o‘quv qo‘llanma chiqargan. Dotsent M.U.Yaxshiboyevning ilmiy rahbarligida quyidagi talabalar Yusupov Shuxrat (2007 yil), Bobomurodov Otabek (2008 yil) va Tursunqulova Sayyora (2008 yil), Muxammadiyev Abdunabi (2009 yil), Raxmanova Nigora (2012) ‘‘Radiotexnika, elektronika ilmiy tekshirish jamiyati stipendiyasi sovrindori bo’lgan.  Kafedra ilmiy mavzusi: ‘‘Axborotlashtirish ta’limda  keng qo‘llash uchun intellektual va dinamik boshqarish tizimlarini qurishning matematik usullari, kompyuter modellashtirish uslublari va algoritmlarini ishlab chiqish’‘.Ilmiy rahbar, f.m.f.n., dots. M.Yaxshiboyev",
         "tel" : ""
    
        },
        {
         
         "cafedraName" : "Axborot ta'lim texnologiyalari kafedrasi",
         "cafedraShortName" : "ATT",
         "cafedraPhoto" : "assets/imgs/ATT.png",
         "cafedraPrincipleName" : "Yakubjanova Dilfuza Qodirovna",
         "photo" : "assets/imgs/yakubjanova.jpg", "info" : "O’zbekiston Respublikasi Prezidentining 2013 yil 26 martdagi ‘‘Axborot kommunikasiya texnologiyalari sohasida kadrlar tayyorlash tizimini yanada takomillashtirish chora-tadbirlari to’g’risida”gi PQ-1942-son qarori asosidagi Vazirlar Mahkamasining 2013 yil 28 iyundagi ‘‘TATU va uning hududiy filiallarining tashkiliy tuzilmasini takomillashtirish to’g’risida”gi 188-son Qarori bilan tasdiqlangan TATU Samarqand filialining yangi strukturasi bo’yicha 2013 - 2014 o’quv yilidan boshlab  ’‘Telekommunikasiya texnologiyalari va kasb ta’limi” fakulteti negizida ‘‘Axborot ta’lim texnologiyalari” kafedrasi 2013 yil 2 sentyabrdan o’z faoliyatini boshladi. 2013 - 2014 o’quv yilida  kafedrada texnika fanlar nomzodi, dotsent I.M.Boynazarov mudirlik vazifasini bajarib keldi. 2014 - yildan boshlab  katta o’qituvchi D.K.Yakubjanova mudirlik qilib kelmoqda. TATU Samarqand filiali ilmiy kengashining 2014 yil 31 - avgustdagi 1 - son majlisi qarori asosida kafedra o’quv uslubiy bo’lim tomonidan 27 bakalavr ta’lim yo’nalishlari va 3 ta magistratura mutaxassisliklari uchun o’quv fanlari ajratib berilgan. Ushbu o’quv fanlariga ajratilgan auditoriya soatlari asosida kafedraning 2014 - 2015 o’quv yilda umumiy o’quv yuklamasi hajmi 15023 soatni tashkil etib, ushbu soatlar negizida 15.75 shtat birligi ajratib berilgan.  2014 yil sentyabr  oyidan asosiy shtatda 11 (10,25 shtat birligi) nafar va to’liq bo’lmagan shtatlardagi o’rindoshlik asosida  16 (5.5 shtat birligi) nafar professor - o’qituvchilar faoliyat ko’rsatib kelmoqda. Shundan 0.5 shtatda 1 nafar professor, fan doktori, 2.25 shtat birligida 6 nafar dotsent, 3.5 shtat birlikda 7 nafar katta o’qituvchi va 9,75 shtat birligida 13 nafar assistentlar faoliyat ko’rsatmoqda.  Kafedraning ilmiy salohiyati 29.0 foiz. Kafedra ilmiy mavzusi: ‘‘Web-texnologiyalar asosida ta’lim jarayonini tashkil qilishga mo’ljallangan pedagogik dasturiy vositalarni ishlab chiqish’‘. Ilmiy maslahatchilar: O’zbekiston madaniyati va san’ati instituti, t.f.d., prof. B.Sh.Radjabov, TATU Samarqand filiali, p.f.d., prof. Maxmudova M.M. ",
         "tel" : "Telefon: (+99891) 554-64-29"
    
        },
        {
         
         "cafedraName" : "Tillar kafedrasi",
         "cafedraShortName" : "CHT",
         "cafedraPhoto" : "assets/imgs/CHT.png",
         "cafedraPrincipleName" : "Toirova Dilfuza Fayzullayevna",
         "photo" : "assets/imgs/toirova_d.jpg",
         "info" : "Tillar kafedrasida jami bo’lib 16 professor - o’qituvchilar faoliyat ko’rsatib kelmoqda. Shu jumladan 14 nafar xodim asosiy shtat birligida va  3 nafar xodim o’rindoshlik asosida faoliyat ko’rsatib kelmoqda. Kafedra tarkibi 1 ta filologiya fanlari doktori, professor, 1 f.f.n.,dotsent, 6 ta katta o’qituvchi va 8 ta assistentdan iborat. Kafedrada jami bo`lib 12,5 shtat birligi mavjud bo`lib, 11,5 asosiy shtat birligida 14 nafar professor - o`qituvchilar, 0,25 shtat birligida ichki o`rindoshlik asosida 1 nafar o`qituvchiva 0,75 shtat birligida 2 nafar  o`qituvchi tashqi o`rindoshlik asosida faoliyat ko`rsatmoqda. Kafedra professor - o’qituvchilarning o’rtacha yoshi 36 yoshni tashkil etadi. Tillar kafedrasining ilmiy salohiyati 13% ni tashkil qiladi. Kafedra ilmiy mavzusi: ‘‘Tillar’‘ kafedrasi professor - o`qituvchilari o`zlarining ilmiy va ilmiy - uslubiy ishlarini quyidagi mavzu asosida olib bormoqdalar: ‘‘Axborotlashtirish va ta`lim tizimlari uchun kadrlarni tayyorlashda zamonaviy axborot va pedagogik texnologiyalar lingvistik bazalarini ilmiy - metodologik asoslarini ishlab chiqish.” Ilmiy rahbar: prof. Abdiev M.B., ilmiy maslahatchi: katta o`qituvchi Narzieva G.A.",
         "tel" : "Telefon: (+99891) 538-98-78"
    
        },
        {
         
         "cafedraName" : "Telekommunikatsiya injiniringi kafedrasi",
         "cafedraShortName" : "TI",
         "cafedraPhoto" : "assets/imgs/TI.png",
         "cafedraPrincipleName" : "Jumanov Haqberdi Axmedovich",
         "photo" : "assets/imgs/Jumanov_X.jpg",
         "info" : "O‘zbekiston Respublikasi Prezidentining 2013 yil 26 martdagi ‘‘Axborot kommunikatsiya texnologiyalari sohasida kadrlar tayyorlash tizimini yanada takomillashtirish chora-tadbirlari to‘g‘risida”gi PQ - 1942 - son qarori asosidagi Vazirlar Mahkamasining 2013 yil 28 iyundagi ‘‘TATU va uning hududiy filiallarining tashkiliy tuzilmasini takomillashtirish to‘g‘risida”gi 188 - son Qarori bilan tasdiqlangan TATU Samarqand filialining yangi strukturasi bo‘yicha 2013 - 2014 o‘quv yilidan boshlab ‘‘Telekommunikatsiya texnologiyalari va kasb ta’limi” fakulteti negizida ‘‘Telekommunikatsiya injiniringi” kafedrasi 2013 yil 2 sentyabrdan o‘z faoliyatini boshladi. 2013 - 2014 yilda kafedrada katta o’qituvchi O.Mamaroufov mudurlik vazifasini bajarib keldi.2014 yildan boshlab fizika matematika fanlari nomzodi dotsent X.A.Jumanov mudurlik qilib kelmoqda. 2014 yil senyatbr oyidan boshlab  kafedrada asosiy shtatlarda  9 (8,75 sht.b.) nafar va o‘rindoshlik asosida 6 (2,75 sht.b.) nafar professor - o‘qituvchilar ishlab kelmoqda. Kafedrada 2.25 sh.b.da 3 nafar fan nomzodlari, dotsentlar, 1,5 shtat birlikda 2 nafar katta o‘qituvchi va 7,75 sh.b da 10 nafar assistentlar faoliyat ko‘rsatmoqda. Kafedraning ilmiy salohiyati 20,5 foiz bo‘lib, o‘rtacha yosh asosiy shtatdagilar bo‘yicha 38 ni, jami kafedra bo‘yicha 39 yoshni tashkil etadi. Kafedra ilmiy mavzusi. ‘‘Telekommunikatsiya tizimlarining texnik vositalari va materialshunosligi tatqiqi hamda real vaqt boshqaruv tizimlarining apparat-dasturiy ta’minoti’‘ Ilmiy maslahatchi: f. m. f. d. prof. U. S. Salixboboev.  ‘‘Dinamik ob’ektlar videotasvirini tahlil etishning  matematik va dasturiy  ta’minoti’‘ Ilmiy maslahatchi: t. f. d. prof. SH. X. Fozilov.",
         "tel" : "Telefon: (+99891) 523-95-93"
    
        },
        {
         "cafedraName" : "Axborot xavfsizligi kafedrasi",
         "cafedraShortName" : "AX",
         "cafedraPhoto" : "assets/imgs/AX.png",
         "cafedraPrincipleName" : "Bekmurodov Ulug`bek Bahrom o`g`li",
         "photo" : "assets/imgs/bekmurodov_u.jpg",
        "info" : "Muxammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universitetiga 2017 yil 25 maydagi “Axborot xavfsizligi” kafedrasini tashkil etish to‘g‘risidagi filialning 406/01-01-sonli xatiga javoban bosh universitetning bildirgisi asosida “Telekommunikatsiya texnologiyalari va kasb-ta’limi” fakulteti “Telekommunikatsiya texnologiyalari” (o‘quv yuklamasi 12247 s., shtat birligi 13.25) va “Axborot ta’lim texnologiyalari” (o‘quv yuklamasi  15848 s., shtat birligi 17.5) negizida “Axborot xavfsizligi”(o‘quv yuklamasi 6768 s., shtat birligi 7.5) tashkil etishga ruxsat berildi. TATU Samarqand filialining yangi strukturasi bo‘yicha 2016 - 2017 o‘quv yilidan boshlab  ’‘Telekommunikatsiya texnologiyalari va kasb ta’limi” fakulteti negizida ‘‘Axborot xavfsizligi” kafedrasi 2017 yil 27 maydan o‘z faoliyatini boshladi.",
         "tel" : "Telefon: (+99893) 331-00-53"
        }
    ];
    }
    else {
      this.cafedraInfo = [

        {
         "cafedraName" : "Информационные технологии",
         "cafedraShortName" : "ИТ",
         "cafedraPhoto" : "assets/imgs/AT.png",
         "cafedraPrincipleName" : "Махмудов Зайнидин Махамадиевич",
         "photo" : "assets/imgs/maxmudov_z.jpg",
         "info" : "",
         "tel" : ""
    
    
        },
         {
         "cafedraName" : "Компьютерные системы",
         "cafedraShortName" : "КС",
         "cafedraPhoto" : "assets/imgs/KT.png",
         "cafedraPrincipleName" : "Бекмуратов Қосим Аллабердиевич",
         "photo" : "assets/imgs/bekmurodov_q.jpg",
         "info" : "Кафедра ‘‘Компьютерные системы” была организована в 2013 году на базе кафедры ‘‘Общепрофессиональные дисциплины”. На кафедре ведут деятельность 7 доцентов, 9 старших преподавателей и 9 ассистентов в общей сложности на 19,75 штатных единиц. В основном штате 16 преподавателей, среди них 4 кандидатов наук, доценты, 7 старших преподавателей и 5 ассистентов. Научный потенциал кафедры составляет 36% Научный потенциал по отношению в основном штате составляет (6/16)*100 = 37.5 %. Средний возраст на кафедре составляет 38 лет. Научно-исследовательские работы кафедры. Название проекта: ‘‘Разработка методики, алгоритма и программного средства решение нелинейных связанных задач электро - магнитоупругости токонесущих анизотропных оболочек с учетом анизотропной электро - проводности’‘.Название проекта: ‘‘Разработка учебно-методического комплекса по предмету ‘‘Интеллектуалные системы” для образовательных направлений ‘‘Информатика и информационные технологии” и ‘‘Профессиональное образование (информатика и информационные технологии)’‘‘‘.",
         "tel" : "Телефон: (+99890) 505-42-00"
    
    
        },
         {
         "cafedraName" : "Кафедра Программная инженерия",
         "cafedraShortName" : "ПИ",
         "cafedraPhoto" : "assets/imgs/DI.png",
         "cafedraPrincipleName" : "Қаршиев Абдували Беркинович",
         "photo" : "assets/imgs/qarshiyev_.jpg",
          "tel" : "Телефон: (+99891) 549-30-89",
          "info" :"Кафедра ‘‘Компьютерный инжиниринг’‘ начала работать в январе 2015 года. Цель создания данной кафедры заключается в подготовке высоко - квалифицированных специалистов, с основными обязанностями проведения учебно - методических и научно - исследовательских работ, по направлению проектирования прикладных и информационных систем, развивающих современную информационную технологию степени бакалавра и магистратуры. Кафедра под названием ‘‘Программный инжиниринг’‘, факультета ‘‘Компьютерный инжиниринг’‘, была утверждена в 2013 - 2014 учебном году, на основе Указа 188 Президента Республики Узбекистан от 26 марта 2013 года ’‘Усовершенствование системы по подготовке кадров в сфере ‘‘Информационных компьютерных технологий’‘ ‘‘ и по приказу ПК-1942 Кабинета Министров от 28 июня 2013 года ‘‘Усовершенствование системы организаций ТУИТ и ему прилагающих филиалов’‘.  Согласно выше указанным приказам, а также указам № 905 от 29 августа 2013 года Университета Информационных Технологий и №1 от 31 августа 2013 года Научного Совета ТУИТ Самаркандского филиала со стороны учебно - методического отдела, для кафедры отведено 15 учебных направлений для бакалавров и 9 для специалистов магистратуры. На основании аудиторных часов, отведенных для этих предметов на кафедре, сумма общей учебной нагрузки на 2013 - 2014 учебный год составляет 25 тыс. часов, и в связи с этим отведено 26 штатов. Начиная  со 2 сентября 2013 года в кафедру привлечены 20 преподавателей на 20 штатных единиц, а также 2 преподавателя на основе совместительства. На сегодняшний день деятельность начали 1 профессор и 4 доцента. По сравнению с общей единицей штатов, научный потенциал составляет 35%."
    
        },
         {
         "cafedraName" : "Гуманитарных и социальных наук",
         "cafedraShortName" : "ГСН",
         "cafedraPhoto" : "assets/imgs/GIF.png",
         "cafedraPrincipleName" : "Усмонов Фаррух Насирдинович",
         "photo" : "assets/imgs/usmonov_f.jpg",
         "tel" : "",
         "info" : "Кафедра ‘‘Гуманитарных и социальных наук’‘ организован в сентябре 2005 года в Самаркандском филиале Ташкентского университета информационных технологий. Профессорско-преподавательскую деятельность на кафедре на протяжении девяти лет осуществляли более 30 человек. На данный момент на кафедре работают: 1 профессор – Ю.Н.Aбдуллаев; 3  доцентов -  Р.С.Мардонов, А.Я.Абдухамидов, Д.Б.Вафаева; 5 старших преподавателей: С.А.Исхакова, Г.И.Kубаева, Ф.Н.Усмонов, Б.Б.Мардонов, A.С.Гуломова; 4 ассистенов:X.Х.Mухаммадиев, A.Р.Axмеджонов, Ш.Э.Эшонкулов, С.Р.Эшмуродов. Преподавателями кафедры проводятся занятия по 12 учебным дисциплинам. За прошедшие годы профессорско-преподавательским составом кафедры было опубликовано более 400 научных и учебно-методических работ. Были созданы мультимедийные пособия по курсам: ‘‘Национальная идея: основные понятия и принципы’‘, ‘‘Геополитика’‘, ‘‘Педагогика’‘, ‘‘Культурология’‘, ‘‘Экономическая теория’‘ и др. Так же, был получен государственный патент на созданную хрестоматию по предмету ‘‘Национальная идея: основные понятия и принципы’‘.Клуб ‘‘Филин”. При кафедре функционирует клуб любителей социально-гуманитарных наук ‘‘ФилИн’‘ (Философия и Информатика). Руководителем клуба является страший преподаватель кафедры Г.И.Кубаева. На собраниях клуба обсуждаются актуальные проблемы социальных наук и информатики. В состав клуба входит 25 одаренных студентов филиала."
    
    
        },
         {
         "cafedraName" : "Кафедра Естественные науки",
         "cafedraShortName" : "ЕН",
         "cafedraPhoto" : "assets/imgs/TF.png",
         "cafedraPrincipleName" : "Асраров Шухрат Аббосович",
         "photo" : "assets/imgs/asrorov_a.jpg",
         "tel" : "",
         "info" : "По постановлению №91 Президента Республики Узбекистан от 2 июня 2005 года ‘‘О совершенствовании структуры подготовки кадров в области информационных технологий’‘ был образован Самаркандский филиал Ташкентского университета информационных технологий. Кафедра естественных наук действует с 2 сентября 2005 года по настоящее время. В 2014 – 2015 учебном году на кафедре ‘‘Естественных наук’‘ запланирована учебная нагрузка в объеме 11304 часа, научно-методические 3054 часов, научно-исследовательские 2403 часов, организационно-методические 2454 часа, духовно-этическое 1346 часов. На кафедре существует 13,25 штатных единиц. 12 человек работают на 11 штатных единицах. Из них на 5 штатных единицах работают 5 доцентов, на 3 штатных единицах 3 старшего преподавателя и 3 штатных единицах работают 4 ассистента. Научный потенциал кафедры составляет 45% (по основным штатным единицам профессорско-преподавательского состава), в средней возраст составляет 47 лет. На кафедре 3 членов работают над докторской диссертацией. Научная тема кафедры. ‘‘Разработка математических методов строения структуры интеллектуального и динамического управления методов компьютерного моделирования и алгоритмов’‘. Научный руководитель, к-н-ф-м, доцент. М.У.Яхшибоев. "
    
    
        },
         {
         "cafedraName" : "Кафедра информационно-образовательных технологий",
         "cafedraShortName" : "ИОТ",
         "cafedraPhoto" : "assets/imgs/ATT.png",
         "cafedraPrincipleName" : "Якубжанова Дилфуза Қодировна",
         "photo" : "assets/imgs/yakubjanova.jpg",
          "tel" : "Телефон: (+99891) 554-64-29",
          "info" : "На основании Указа Президента Республики Узбекистан PQ-№1942 от 26 марта 2013 года ‘‘О мероприятиях по совершентсвованию системы подготовки кадров в сфере  информационно-коммуникационных технологий” и Постановления Кабинета министров №188 от 28 июня 2013 года ‘‘О совершенствовании организационной структуры ТУИТ и его региональных филиалов’‘ с 2012-2014 учебного года в новой структуре на базе факультета ‘‘Телекоммуникационные технологии и профессиональное образование’‘ Самаркандского филиала ТУИТ начала функционировать кафедра ‘‘Информационно-образовательные технологии’‘ В 2013-2014 учебном году кафедрой заведовал кандидат технических наук, доцент  Бойназаров И.М. Начиная, с апреля 2014 года кафедрой заведует старший преподаватель Якубжанова Д.К. На кафедре проводятся занятия по 27 образовательным направлениям бакалавриата и 3 предметам магистратуры. Учебная нагрузка кафедры на 2014-2015 учебный год 15023 часа и  составляет 15.75 штатную единицу. С сентября 2014 года  11 преподавателей работают  на основной штатной единице и 16 преподавателей по совместительству. Из них  1 доктор наук, профессор на 0.5 штатной единице, 6 доцентов на 2,25 штатной единице, 7 старших преподавателей на  3.5 штатной единице и  13 ассистентов на 9,75 штатной единице. Научный потенциал кафедры 29 процентов. Научная  тема кафедры. ‘‘Разработка педагогических программных средств предназначенных для организации обучения на основе Web-технологий’‘"
    
        },
         {
         "cafedraName" : "Кафедра языков",
         "cafedraShortName" : "ИЯ",
         "cafedraPhoto" : "assets/imgs/CHT.png",
         "cafedraPrincipleName" : "Тоирова Дилфуза Файзуллаевна",
         "photo" : "assets/imgs/toirova_d.jpg",
         "tel" : "Телефон: (+99891) 538-98-78",
         "info" : "На кафедре ‘‘Языков’‘ всего 12,5 штатных единиц. На основном штате работают 14 преподавателей. Базовое образование преподавателей основного штата составляет: 7 преподавателей по английскому языку, 1 преподаватель по немецкому языку, 1 преподаватель по французскому языку, 1 преподаватель по русскому языку, 1 преподаватель по узбекскому языку, 2 преподавателя по культуре речи и 2 преподавателя по физической культуре. Научная остепененность кафедры составляет 13% процента, средний возраст 36 лет. Научная тема кафедры. Профессора - учителя кафедры ‘‘Языков’‘ ведут научную работу на основе следующей темы: ‘‘Подготовка кадров в сфере информации и педагогических технологий. Разработка лингвистической и научно - методологической базы для информатизации и системы образования’‘. Научный руководитель: проф.Абдиев М.Б. Научный консультант: ст.пр.НАрзиева Г.А."
    
    
        },
         {
         "cafedraName" : "Кафедра Телекоммуникационный инжиниринг",
         "cafedraShortName" : "ТИ",
         "cafedraPhoto" : "assets/imgs/TI.png",
         "cafedraPrincipleName" : "Жуманов Хакберди Ахмедович",
         "photo" : "assets/imgs/yakubjanova.jpg",
         "tel" : "Телефон: (+99891) 523-95-93",
         "info" : "На основании Указа Президента Республики Узбекистан PQ-№1942 от 26 марта 2013 года ‘‘О мероприятиях по совершенствованию системы подготовки кадров в сфере информационно - коммуникационных технологий” и Постановления Кабинета министров №188 от 28 июня 2013 года ‘‘О совершенствовании организационной структуры ТУИТ и его региональных филиалов’‘, с 2013 - 2014 учебного года в новой структуре, на базе факультета ‘‘Телекоммуникационные технологии и профессиональное образование’‘, Самаркандского филиала ТУИТ с 2 сентября 2013 года начала функционировать кафедра ‘‘Телекоммуникационный инжиниринг’‘. В 2013 - 2014 учебном году кафедрой заведовал старший преподаватель Мамарауфов О. Начиная с января 2014 года кафедрой заведует кандидат физико - математических наук, доцент Жуманов Х.А. На кафедре проводятся занятия по двум образовательным направлениям бакалавриата. Учебная нагрузка кафедры на 2014 - 2015 учебный год 10638 часа и составляет 11,5 штатную единицу. С сентября 2014 года 9 (8,75) преподавателей работают на основной штатной единице и 6 (2,75 шт.ед.) преподавателей по совместительству. Из них 3 доцентов на 2,25 штатной единице, 2 старших преподавателей (1,5 шт.ед.) и 10 ассистентов на 7,75 штатной единице. Научный потенциал кафедры 20,5 процентов. Научная  тема кафедры: ‘‘Исследование технических средств и материаловедения телекоммуникационных систем и программное обеспечение систем управления в режиме реального времени’‘."
    
    
        },
         {
         "cafedraName" : "Информационная безопасность",
         "cafedraShortName" : "ИБ",
         "cafedraPhoto" : "assets/imgs/AX.png",
         "cafedraPrincipleName" : "Бекмуродов Улуғбек Баҳром ўғли",
         "photo" : "assets/imgs/bekmurodov_u.jpg"
    
    
        }
    ];
  }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CafedraPage');
  }
  goToItem(p){
    let a =   this.navCtrl.push('CafedraInfoPage', {p});
    
 
   }
   goToHomePage(){
    this.navCtrl.setRoot(HomePage);
  }

}
