/* NS-Zeit Lernlandkarte: gemeinsames Skript.
   Speichert alles nur im Gerät (localStorage). Keine Namen, kein Server. */
(function () {
  "use strict";

  var KEY = "nszeit-v1";
  /* Teile jeder Station. Eine Station ist geschafft, wenn alle Pflichtteile erledigt sind.
     Dann öffnet sich automatisch die nächste. Der Code ist nur noch Notschlüssel (z. B. nach Krankheit). */
  var STUNDEN = [
    { n: 1, code: "RADIO", jahr: "1933–1939", kern: "Die Nazis verführten mit Gefühl und Gemeinschaft und ließen nur noch eine Meinung zu.", merke: ["Propaganda: Radio, Plakate und riesige Aufmärsche. Es gab nur noch eine Meinung.", "Kinder kamen ab 10 Jahren in die Hitlerjugend oder den BDM, ab 1939 war das Pflicht.", "Viele machten mit, weil es sich nach Gemeinschaft und Abenteuer anfühlte."], heft: {"daten": [["1933", "Propagandaministerium unter Joseph Goebbels"], ["1933", "Gleichschaltung von Presse und Rundfunk"], ["1936", "Gesetz: Die Hitlerjugend wird Staatsjugend"], ["1939", "Pflicht für alle 10- bis 18-Jährigen"]], "begriffe": [["Propaganda", "gezielte Beeinflussung der Menschen, mit Gefühlen statt Fakten"], ["Gleichschaltung", "Zeitungen, Radio und Vereine müssen alle im Sinne der NSDAP handeln"], ["Hitlerjugend (HJ) / BDM", "Jugendorganisationen der NSDAP für Jungen und Mädchen"], ["Volksempfänger", "billiges Radio, damit die Propaganda in jedes Wohnzimmer kommt"]], "heute": "Die fünf Tricks der Propaganda: Gefühl statt Fakten, Wiederholen, nur eine Stimme, Feindbild, Wir-Gefühl. Heute schützt Art. 5 GG die Meinungs- und Pressefreiheit.", "text": "Die Nationalsozialisten setzten auf Verführung: Gemeinschaft, Abenteuer, große Gefühle. Gleichzeitig ließen sie nur noch eine Stimme zu und erfassten Kinder ab 10 Jahren. Wer mitmachte, fühlte sich als Teil von etwas Großem. Wer nicht passte, wurde ausgeschlossen.", "frage": "Warum machten so viele Menschen mit, auch Jugendliche in deinem Alter?", "foto": "s1-hj-zeltlager"}, titel: "Verführt und erfasst", teile: [
      { href: "#einstieg", name: "Einstieg", need: ["s1.feed"] },
      { href: "#a", name: "A Radio", need: ["s1.a.match", "s1.a.radio"] },
      { href: "#b", name: "B Foto", need: ["s1.b.1", "s1.b.4"] },
      { href: "#c", name: "C Jugend", need: ["s1.c.sort", "s1.c.leben"] },
      { href: "#heute", name: "Heute-Check", need: ["s1.h.erlebt"] },
      { href: "#ecken", name: "Vier Ecken", need: ["s1.d.ecke"] } ] },
    { n: 2, code: "STUFE", jahr: "1933–1941", kern: "Wer nicht dazugehören sollte, verlor Schritt für Schritt alle Rechte.", merke: ["1933 entstand in Dachau das erste KZ, zuerst für politische Gegner.", "Juden verloren Schritt für Schritt ihre Rechte: 1933 Boykott, 1935 Nürnberger Gesetze, 1938 Pogromnacht.", "Viele schauten weg, weil jede Stufe nur ein bisschen schlimmer war."], heft: {"daten": [["März 1933", "Erstes KZ in Dachau"], ["1. April 1933", "Boykott jüdischer Geschäfte"], ["1935", "Nürnberger Gesetze"], ["9./10. Nov. 1938", "Novemberpogrom"], ["1941", "Judenstern ab 6 Jahren"]], "begriffe": [["Konzentrationslager (KZ)", "Lager, in dem Menschen ohne Gericht eingesperrt, gequält und ermordet wurden"], ["Nürnberger Gesetze", "Gesetze von 1935, die Juden ihre Bürgerrechte nahmen"], ["Pogrom", "gewaltsamer Angriff auf eine Minderheit"], ["Sündenbock", "eine Gruppe wird für alle Probleme verantwortlich gemacht"]], "heute": "Sündenbock und Entrechtung in kleinen Schritten erkennen. Art. 3 GG: Niemand darf wegen Abstammung oder Glauben benachteiligt werden. Art. 16 GG: Die deutsche Staatsangehörigkeit darf nicht entzogen werden.", "text": "Zuerst verfolgten die Nationalsozialisten ihre politischen Gegner und sperrten sie in Konzentrationslager wie Dachau. Die Juden wurden Schritt für Schritt entrechtet: 1933 Boykott und Berufsverbote, 1935 Nürnberger Gesetze, 1938 Novemberpogrom, 1941 Judenstern. Viele schauten weg, weil jede Stufe nur ein bisschen schlimmer war als die davor.", "frage": "Wie werden aus Nachbarn Feinde gemacht, Schritt für Schritt?", "foto": "s2-boykott"}, titel: "Wer nicht dazugehört", teile: [
      { href: "#einstieg", name: "Einstieg", need: ["s2.e"] },
      { href: "#a", name: "A Gegner", need: ["s2.a.warum"] },
      { href: "#b", name: "B Treppe", need: ["s2.b.order", "s2.b.aus"] },
      { href: "#c", name: "C München", need: ["s2.c.muc"] },
      { href: "#heute", name: "Heute-Check", need: ["s2.h.text"] },
      { href: "#linie", name: "Positionslinie", need: ["s2.d.pos"] } ] },
    { n: 3, code: "GRENZE", jahr: "1939", kern: "Hitler versprach Frieden und begann am 1. September 1939 den Zweiten Weltkrieg.", merke: ["Hitler sprach von Frieden, rüstete aber heimlich auf.", "Am 1. September 1939 überfiel Deutschland Polen. Der Zweite Weltkrieg begann.", "Ab Dezember 1941 kämpften auch die USA mit: ein Weltkrieg."], heft: {"daten": [["1935", "Wehrpflicht wird wieder eingeführt"], ["30. Sept. 1938", "Münchner Abkommen"], ["23. Aug. 1939", "Hitler-Stalin-Pakt"], ["1. Sept. 1939", "Überfall auf Polen, Beginn des Zweiten Weltkriegs"], ["22. Juni 1941", "Überfall auf die Sowjetunion"], ["Dez. 1941", "Krieg mit den USA"]], "begriffe": [["Appeasement", "Beschwichtigung: Großbritannien und Frankreich gaben Hitler nach, um Krieg zu verhindern"], ["Blitzkrieg", "schneller Angriff mit Flugzeugen und Panzern"], ["Vorwand", "erfundener Grund, wie der gespielte Überfall auf den Sender Gleiwitz"], ["Hitler-Stalin-Pakt", "Abmachung von 1939, Polen aufzuteilen"]], "heute": "Achte auf Taten, nicht nur auf Worte, und prüfe Nachrichten, bevor du sie glaubst. Art. 26 GG: Ein Angriffskrieg ist verboten.", "text": "Hitler sprach vom Frieden, rüstete aber massiv auf. Großbritannien und Frankreich versuchten ihn 1938 mit dem Münchner Abkommen zu beschwichtigen (Appeasement). Mit einem gespielten Überfall auf den Sender Gleiwitz als Vorwand begann am 1. September 1939 mit dem deutschen Überfall auf Polen der Zweite Weltkrieg. Ab Dezember 1941 war er ein Weltkrieg.", "frage": "Hitler sprach vom Frieden. Plante er die ganze Zeit den Krieg?", "foto": "s3-schlagbaum"}, titel: "Der Weg in den Krieg", teile: [
      { href: "#einstieg", name: "Einstieg", need: ["s3.e"] },
      { href: "#a", name: "A Worte und Taten", need: ["s3.a.sort", "s3.a.appease"] },
      { href: "#b", name: "B Zeitstrahl", need: ["s3.b.order"] },
      { href: "#c", name: "C Gleiwitz", need: ["s3.c.vorwand"] },
      { href: "#heute", name: "Heute-Check", need: ["s3.h.text"] },
      { href: "#kugellager", name: "Kugellager", need: ["s3.d.text"] } ] },
    { n: 4, code: "OSTEN", jahr: "1939–1945", kern: "Im Osten führte Deutschland einen Krieg gegen ganze Völker.", merke: ["Im Osten wollten die Nazis Menschen vertreiben, versklaven oder töten: ein Vernichtungskrieg.", "In Leningrad verhungerten über eine Million Menschen.", "Millionen Menschen mussten in Deutschland Zwangsarbeit leisten, auch bei uns in Bayern."], heft: {"daten": [["1939", "Besetzung Polens"], ["22. Juni 1941", "Überfall auf die Sowjetunion"], ["1941–1944", "Blockade von Leningrad"], ["1939–1945", "8,5 Mio. ausländische Arbeitskräfte in Deutschland"], ["2001", "Stiftung entschädigt ehemalige Zwangsarbeiter"]], "begriffe": [["Vernichtungskrieg", "Krieg nicht nur gegen Soldaten, sondern gegen die ganze Bevölkerung"], ["Zwangsarbeit", "Arbeit, zu der Menschen mit Gewalt gezwungen werden"], ["Lebensraum im Osten", "Ziel der NSDAP: Land im Osten erobern und die Menschen vertreiben"], ["Blockade", "eine Stadt wird eingeschlossen, nichts kommt hinein"]], "heute": "Wörter, die Menschen abwerten („Flut“, „Ungeziefer“), machen Gewalt leichter. Art. 1 GG: Die Würde jedes Menschen ist unantastbar.", "text": "Im Osten führten Wehrmacht und SS einen Vernichtungskrieg: Die Menschen dort galten als „minderwertig“. In Polen wurde die Führungsschicht ermordet, Menschen wurden vertrieben und zur Zwangsarbeit gezwungen. In der Sowjetunion starben 10 bis 15 Millionen Zivilisten, in Leningrad verhungerten über eine Million Menschen. Millionen Zwangsarbeiter mussten in Deutschland arbeiten, auch bei uns in Bayern.", "frage": "Was passiert, wenn Menschen nichts mehr wert sein sollen?", "foto": "s4-ost"}, titel: "Vernichtungskrieg und Zwangsarbeit", teile: [
      { href: "#einstieg", name: "Einstieg", need: ["s4.e"] },
      { href: "#a", name: "A Osten", need: ["s4.a.mass", "s4.a.text"] },
      { href: "#b", name: "B Leningrad", need: ["s4.b.text"] },
      { href: "#c", name: "C Zwangsarbeit", need: ["s4.c.brief"] },
      { href: "#heute", name: "Heute-Check", need: ["s4.h.text"] },
      { href: "#schreib", name: "Schreibgespräch", need: ["s4.d.text"] } ] },
    { n: 5, code: "NAMEN", jahr: "1941–1945", kern: "Über sechs Millionen Juden wurden ermordet. Wir erinnern an jeden Einzelnen.", merke: ["Über sechs Millionen Juden wurden ermordet. Das nennt man Holocaust oder Shoah.", "Der Weg dorthin: Gettos, Massenerschießungen, Vernichtungslager wie Auschwitz.", "Stolpersteine und Erinnerungszeichen erinnern an jeden Menschen mit Namen."], heft: {"daten": [["ab 1939", "Gettos im besetzten Polen"], ["ab Sommer 1941", "Massenerschießungen im Osten"], ["20. Jan. 1942", "Wannsee-Konferenz"], ["1942–1945", "Vernichtungslager, z. B. Auschwitz"], ["27. Jan. 1945", "Befreiung von Auschwitz, heute Gedenktag"]], "begriffe": [["Holocaust / Shoah", "der Mord an über sechs Millionen europäischen Juden"], ["Getto", "abgesperrtes Stadtviertel, in das Juden gezwungen wurden"], ["Vernichtungslager", "Lager, das nur zum Ermorden von Menschen gebaut wurde"], ["Stolperstein", "Gedenkstein im Gehweg vor dem letzten Wohnort eines Opfers"]], "heute": "Erinnern statt „Schlussstrich“. Holocaustleugnung ist in Deutschland strafbar. Art. 1 GG ist die Antwort auf den Holocaust.", "text": "Der Holocaust (hebräisch: Shoah) war der geplante Mord an über sechs Millionen europäischen Juden. Auch Sinti und Roma, Menschen mit Behinderungen und andere Gruppen wurden ermordet. Aus Ausgrenzung wurden Gettos, Massenerschießungen und schließlich Vernichtungslager wie Auschwitz. Wir erinnern an die Opfer mit ihren Namen, damit so etwas nie wieder geschieht.", "frage": "Wie wurde aus Hass ein Völkermord, und warum erinnern wir uns bis heute daran?", "foto": "s5-stolpersteine"}, titel: "Der Holocaust", teile: [
      { href: "#einstieg", name: "Einstieg", need: ["s5.e"] },
      { href: "#a", name: "A Vernichtung", need: ["s5.a.begriffe", "s5.a.osten"] },
      { href: "#b", name: "B Otto Schwerdt", need: ["s5.b.pflicht"] },
      { href: "#c", name: "C Erinnern", need: ["s5.c.person"] },
      { href: "#heute", name: "Heute-Check", need: ["s5.h.text"] },
      { href: "#runde", name: "Ruhige Runde", need: ["s5.d.satz"] } ] },
    { n: 6, code: "MUT", jahr: "1933–1945", kern: "Nur wenige hatten den Mut zum Widerstand, oft bezahlten sie mit ihrem Leben.", merke: ["Die meisten Deutschen machten mit oder schwiegen.", "Einige leisteten Widerstand: die Weiße Rose, Georg Elser, Stauffenberg, die Edelweißpiraten.", "Zivilcourage kannst du auch heute zeigen, jeden Tag."], heft: {"daten": [["8. Nov. 1939", "Georg Elser: Bombe im Münchner Bürgerbräukeller"], ["1942/43", "Flugblätter der Weißen Rose"], ["22. Feb. 1943", "Hinrichtung von Hans und Sophie Scholl"], ["20. Juli 1944", "Attentat von Stauffenberg"], ["Nov. 1944", "Edelweißpiraten in Köln erhängt"]], "begriffe": [["Widerstand", "gegen eine Herrschaft handeln, die man ablehnt"], ["Zivilcourage", "sich für andere einsetzen, auch wenn es Nachteile bringt"], ["Weiße Rose", "Münchner Studentengruppe, die Flugblätter gegen Hitler verteilte"], ["Edelweißpiraten", "Jugendliche, die sich der Hitlerjugend verweigerten"]], "heute": "Zivilcourage geht jeden Tag: hinschauen, Hilfe holen (110), Betroffene unterstützen. Art. 20 Abs. 4 GG: Recht auf Widerstand gegen alle, die die Demokratie abschaffen wollen.", "text": "Die meisten Deutschen machten mit oder schwiegen. Trotzdem leisteten Menschen Widerstand: Einzelne wie Georg Elser, Studierende wie die Weiße Rose, Geistliche wie Rupert Mayer, Offiziere um Stauffenberg und Jugendliche wie die Edelweißpiraten. Viele bezahlten mit ihrem Leben. Zivilcourage heißt heute: sich für andere einsetzen, auch wenn es unbequem ist.", "frage": "Wegschauen oder handeln? Was trieb Menschen an, ihr Leben zu riskieren?", "foto": "s6-weisse-rose"}, titel: "Widerstand", teile: [
      { href: "#einstieg", name: "Einstieg", need: ["s6.e"] },
      { href: "#a", name: "A Gesichter", need: ["s6.a.wer", "s6.a.text"] },
      { href: "#b", name: "B Edelweißpiraten", need: ["s6.b.vergehen"] },
      { href: "#c", name: "C Formen", need: ["s6.c.sort"] },
      { href: "#heute", name: "Heute-Check", need: ["s6.h.text"] },
      { href: "#fishbowl", name: "Fishbowl", need: ["s6.d.text"] } ] },
    { n: 7, code: "GRUNDGESETZ", jahr: "1945–1949", kern: "Nach dem Krieg bekam Deutschland mit dem Grundgesetz eine Demokratie, die sich selbst schützt.", merke: ["Am 8. Mai 1945 endete der Krieg in Europa. Über 60 Millionen Menschen waren tot.", "Millionen Deutsche flohen oder wurden vertrieben, viele kamen nach Bayern.", "1949 kam das Grundgesetz: Menschenwürde, Demokratie und Rechtsstaat für alle."], heft: {"daten": [["Feb. 1943", "Niederlage in Stalingrad"], ["6. Juni 1944", "Landung der Alliierten in der Normandie"], ["29. April 1945", "Befreiung des KZ Dachau"], ["8. Mai 1945", "Kapitulation, Kriegsende in Europa"], ["2. Sept. 1945", "Kapitulation Japans, Ende des Zweiten Weltkriegs"], ["23. Mai 1949", "Das Grundgesetz tritt in Kraft"]], "begriffe": [["Kapitulation", "ein Staat gibt den Krieg auf"], ["Flucht und Vertreibung", "Millionen Deutsche verloren ab 1945 ihre Heimat im Osten"], ["Grundgesetz", "die Verfassung der Bundesrepublik Deutschland seit 1949"], ["Wehrhafte Demokratie", "die Demokratie kann sich gegen ihre Feinde wehren, z. B. durch Parteiverbote"]], "heute": "Das Grundgesetz ist die Antwort auf die NS-Zeit: Menschenwürde, Demokratie, Rechtsstaat. Art. 1 und 20 dürfen nie geändert werden (Art. 79).", "text": "Nach den Niederlagen in Stalingrad (1943) und der Landung der Alliierten in der Normandie (1944) wurde die Wehrmacht zurückgedrängt. Am 8. Mai 1945 kapitulierte Deutschland, am 2. September 1945 Japan. Über zwölf Millionen Deutsche flohen oder wurden vertrieben. Das Grundgesetz von 1949 ist die Antwort auf die NS-Zeit: Menschenwürde, Demokratie und Rechtsstaat, geschützt als wehrhafte Demokratie.", "frage": "Wie endete der Krieg, und was haben wir daraus gelernt?", "foto": "s7-truemmer"}, titel: "Kriegsende und was bleibt", teile: [
      { href: "#einstieg", name: "Einstieg", need: ["s7.e"] },
      { href: "#a", name: "A Kriegsende", need: ["s7.a.order", "s7.a.wende"] },
      { href: "#b", name: "B Flucht", need: ["s7.b.sicht"] },
      { href: "#c", name: "C Grundgesetz", need: ["s7.c.match"] },
      { href: "#heute", name: "Demokratie-Radar", need: ["s7.h.text"] },
      { href: "#abschluss", name: "Abschluss", need: ["s7.d.lehre"] } ] }
  ];

  function load() {
    try { var s = JSON.parse(localStorage.getItem(KEY) || "{}"); return { open: s.open || {}, done: s.done || {}, pass: s.pass || {}, a: s.a || {} }; }
    catch (e) { return { open: {}, done: {}, pass: {}, a: {} }; }
  }
  var state = load();
  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* privater Modus: dann eben ohne Speichern */ } }

  /* Ein Wert zählt als erledigt: Text ab 10 Zeichen, Auswahl getroffen, Liste/Objekt nicht leer. */
  function filled(v) {
    if (v == null) return false;
    if (typeof v === "string") return v.trim().length >= (v.length > 30 || /\s/.test(v.trim()) ? 10 : 1) || v === "angeschaut";
    if (Array.isArray(v)) return v.length > 0;
    if (typeof v === "object") return Object.keys(v).length > 0;
    return !!v;
  }
  function teilDone(t) { return t.need.every(function (k) { return filled(state.a[k]); }); }

  var NS = window.NS = {
    stunden: STUNDEN,
    get: function (k) { return state.a[k]; },
    set: function (k, v) { state.a[k] = v; save(); },
    teilDone: teilDone,
    /* Wie viele Teile einer Station sind erledigt? */
    stand: function (n) { var t = STUNDEN[n - 1].teile; return { fertig: t.filter(teilDone).length, gesamt: t.length }; },
    isDone: function (n) { if (state.done[n]) return true; var st = NS.stand(n); return st.fertig === st.gesamt; },
    isOpen: function (n) { return n === 1 || !!state.open[n] || NS.isDone(n - 1); },
    hasPass: function (n) { return !!state.pass[n]; },
    open: function (n) { state.open[n] = true; save(); },
    markDone: function (n) { state.done[n] = true; save(); },
    reset: function () { try { localStorage.removeItem(KEY); } catch (e) {} state = load(); },
    tryCode: function (n, code) {
      var s = STUNDEN[n - 1];
      if (s && String(code || "").trim().toUpperCase() === s.code) { NS.open(n); return true; }
      return false;
    }
  };

  /* ---------- Fotos werden scharf ---------- */
  function initReveal() {
    var els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("is-in"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
    }, { threshold: 0.25, rootMargin: "0px 40px 0px 40px" });
    els.forEach(function (e) { io.observe(e); });
  }

  /* ---------- Textantworten speichern ---------- */
  function initAnswers() {
    document.querySelectorAll("textarea[data-key]").forEach(function (ta) {
      var k = ta.dataset.key, note = ta.parentNode.querySelector(".saved"), t;
      if (NS.get(k)) ta.value = NS.get(k);
      ta.addEventListener("input", function () {
        clearTimeout(t);
        t = setTimeout(function () { NS.set(k, ta.value); if (note) { note.textContent = "Gespeichert"; setTimeout(function () { note.textContent = ""; }, 1400); } progress(); }, 350);
      });
    });
  }

  /* ---------- Auswahl (eine oder mehrere) ---------- */
  function initChoices() {
    document.querySelectorAll("[data-choice]").forEach(function (group) {
      var k = group.dataset.choice, multi = group.hasAttribute("data-multi");
      var val = NS.get(k) || (multi ? [] : "");
      var btns = group.querySelectorAll("button[data-v]");
      function paint() { btns.forEach(function (b) { b.setAttribute("aria-pressed", multi ? val.indexOf(b.dataset.v) > -1 : b.dataset.v === val); }); }
      btns.forEach(function (b) {
        b.addEventListener("click", function () {
          if (multi) { var i = val.indexOf(b.dataset.v); if (i > -1) val.splice(i, 1); else val.push(b.dataset.v); }
          else val = b.dataset.v;
          NS.set(k, multi ? val.slice() : val); paint(); progress();
          group.dispatchEvent(new CustomEvent("ns-change", { detail: val }));
        });
      });
      paint();
    });
  }

  /* ---------- Zuordnen mit Auswahlliste und Prüfen ---------- */
  function initMatch() {
    document.querySelectorAll("[data-match]").forEach(function (box) {
      var k = box.dataset.match, saved = NS.get(k) || {};
      var rows = box.querySelectorAll(".match__row");
      rows.forEach(function (r, i) { var s = r.querySelector("select"); if (saved[i]) s.value = saved[i];
        s.addEventListener("change", function () { saved[i] = s.value; NS.set(k, saved); r.classList.remove("is-right", "is-wrong"); progress(); }); });
      var btn = box.querySelector("[data-check]"), fb = box.querySelector(".feedback");
      if (btn) btn.addEventListener("click", function () {
        var ok = 0;
        rows.forEach(function (r) { var s = r.querySelector("select"), right = s.value === r.dataset.right;
          r.classList.toggle("is-right", right); r.classList.toggle("is-wrong", !right && s.value !== ""); if (right) ok++; });
        fb.textContent = ok === rows.length ? "Alles richtig. Stark!" : ok + " von " + rows.length + " richtig. Rot markierte noch einmal ansehen.";
        fb.className = "feedback " + (ok === rows.length ? "ok" : "no");
        NS.set(k + ".punkte", ok + "/" + rows.length);
      });
    });
  }

  /* ---------- Sortieren in zwei Spalten (antippen, dann Spalte antippen) ---------- */
  function initSorter() {
    document.querySelectorAll("[data-sorter]").forEach(function (box) {
      var k = box.dataset.sorter, saved = NS.get(k) || {}, sel = null;
      var pool = box.querySelector(".sorter__pool"), cols = box.querySelectorAll(".sorter__col");
      var cards = box.querySelectorAll(".chipcard");
      cards.forEach(function (c) {
        var where = saved[c.dataset.id];
        if (where) box.querySelector('.sorter__col[data-col="' + where + '"]').appendChild(c);
        c.addEventListener("click", function (ev) {
          ev.stopPropagation();
          if (sel === c) { c.classList.remove("is-sel"); sel = null; return; }
          if (sel) sel.classList.remove("is-sel");
          sel = c; c.classList.add("is-sel");
        });
      });
      function drop(target, colName) {
        if (!sel) return;
        target.appendChild(sel); sel.classList.remove("is-sel", "is-right", "is-wrong");
        if (colName) saved[sel.dataset.id] = colName; else delete saved[sel.dataset.id];
        NS.set(k, saved); sel = null; progress();
      }
      cols.forEach(function (col) { col.addEventListener("click", function () { drop(col, col.dataset.col); }); });
      pool.addEventListener("click", function () { drop(pool, null); });
      var btn = box.querySelector("[data-check]"), fb = box.querySelector(".feedback");
      if (btn) btn.addEventListener("click", function () {
        var ok = 0, placed = 0;
        cards.forEach(function (c) { var col = c.parentNode.dataset.col; c.classList.remove("is-right", "is-wrong");
          if (col) { placed++; var r = col === c.dataset.right; c.classList.add(r ? "is-right" : "is-wrong"); if (r) ok++; } });
        fb.textContent = placed < cards.length ? "Erst alle Karten einsortieren." : (ok === cards.length ? "Alles richtig sortiert." : ok + " von " + cards.length + " richtig. Rot umrandete Karten noch einmal überlegen.");
        fb.className = "feedback " + (ok === cards.length ? "ok" : "no");
      });
    });
  }

  /* ---------- Reihenfolge antippen: erstes Antippen = 1, zweites = 2 ... ---------- */
  function initOrder() {
    document.querySelectorAll("[data-order]").forEach(function (box) {
      var k = box.dataset.order, items = box.querySelectorAll(".order__item"), seq = NS.get(k) || [];
      var fb = box.querySelector(".feedback");
      function paint() {
        items.forEach(function (it) {
          var i = seq.indexOf(it.dataset.id);
          it.querySelector(".nr").textContent = i > -1 ? i + 1 : "";
          it.classList.toggle("is-set", i > -1); it.classList.remove("is-right", "is-wrong");
        });
      }
      items.forEach(function (it) {
        it.addEventListener("click", function () {
          var i = seq.indexOf(it.dataset.id);
          if (i > -1) seq.splice(i, 1); else seq.push(it.dataset.id);
          NS.set(k, seq.slice()); paint(); progress(); if (fb) fb.textContent = "";
        });
      });
      var chk = box.querySelector("[data-check]"), rst = box.querySelector("[data-reset]");
      if (rst) rst.addEventListener("click", function () { seq = []; NS.set(k, []); paint(); if (fb) fb.textContent = ""; });
      if (chk) chk.addEventListener("click", function () {
        if (seq.length < items.length) { fb.textContent = "Erst alle Ereignisse antippen."; fb.className = "feedback no"; return; }
        var ok = 0;
        items.forEach(function (it) { var r = seq.indexOf(it.dataset.id) + 1 === Number(it.dataset.pos); it.classList.add(r ? "is-right" : "is-wrong"); if (r) ok++; });
        fb.textContent = ok === items.length ? "Alles in der richtigen Reihenfolge." : ok + " von " + items.length + " an der richtigen Stelle. Tipp: Die Jahreszahlen stehen im Buch.";
        fb.className = "feedback " + (ok === items.length ? "ok" : "no");
        if (ok === items.length) items.forEach(function (it) { var s = it.querySelector("small[data-date]"); if (s) s.textContent = s.dataset.date; });
      });
      paint();
    });
  }

  /* ---------- Balken wachsen, wenn sie ins Bild kommen ---------- */
  function initBars() {
    document.querySelectorAll(".bars").forEach(function (b) {
      var bars = b.querySelectorAll(".bars__bar i");
      bars.forEach(function (i) { i.dataset.v = i.style.getPropertyValue("--v"); i.style.setProperty("--v", 0); });
      var show = function () { bars.forEach(function (i) { i.style.setProperty("--v", i.dataset.v); }); };
      if (!("IntersectionObserver" in window)) return show();
      var io = new IntersectionObserver(function (e) { if (e[0].isIntersecting) { show(); io.disconnect(); } }, { threshold: .3 });
      io.observe(b);
    });
  }

  /* ---------- Gekürzte Videos: nur ausgewählte Abschnitte, als Kapitel mit Haken ----------
     <div class="clip" data-yt="ID" data-key="..." data-title="..." data-quelle="..." data-clips='[[start,ende,"Titel"],...]'></div>
     Eigene Steuerung (YouTube-Leiste aus), damit nur die gekürzte Länge sichtbar ist. */
  var ytReady = null;
  function loadYT() {
    if (ytReady) return ytReady;
    ytReady = new Promise(function (ok, fail) {
      if (window.YT && window.YT.Player) return ok();
      var t = setTimeout(function () { fail(new Error("timeout")); }, 8000);
      window.onYouTubeIframeAPIReady = function () { clearTimeout(t); ok(); };
      var sc = document.createElement("script"); sc.src = "https://www.youtube.com/iframe_api"; sc.onerror = function () { clearTimeout(t); fail(new Error("load")); };
      document.head.appendChild(sc);
    });
    return ytReady;
  }
  function mmss(x) { x = Math.max(0, Math.round(x)); return Math.floor(x / 60) + ":" + ("0" + (x % 60)).slice(-2); }
  function initClips() {
    document.querySelectorAll(".clip[data-yt]").forEach(function (box, bi) {
      var segs = JSON.parse(box.dataset.clips), total = segs.reduce(function (a, s) { return a + s[1] - s[0]; }, 0);
      var key = box.dataset.key, seen = NS.get(key + ".kap") || [];
      box.innerHTML =
        '<div class="clip__screen"><div class="clip__frame" id="clipframe' + bi + '"></div>' +
          '<button type="button" class="clip__start"><span class="play" aria-hidden="true"></span><span class="h-s">Video starten</span><span class="small">' + segs.length + ' Kapitel · ' + mmss(total) + ' Min · Kopfhörer!</span></button></div>' +
        '<div class="clip__bar"><button type="button" class="clip__pp" aria-label="Abspielen">▶</button><div class="clip__track"><div class="clip__fill"></div>' +
          segs.map(function (s, i) { var left = segs.slice(0, i).reduce(function (a, x) { return a + x[1] - x[0]; }, 0) / total * 100; return i ? '<i style="left:' + left + '%"></i>' : ""; }).join("") +
          '</div><span class="clip__time">0:00 / ' + mmss(total) + '</span><button type="button" class="clip__fs" aria-label="Vollbild">⛶</button></div>' +
        '<ol class="clip__chapters">' + segs.map(function (s, i) { return '<li><button type="button" data-i="' + i + '" class="' + (seen.indexOf(i) > -1 ? "seen" : "") + '"><span class="nr">' + (i + 1) + '</span><span class="t">' + esc(s[2]) + '</span><span class="d">' + mmss(s[1] - s[0]) + '</span></button></li>'; }).join("") + '</ol>' +
        '<p class="clip__meta"><b>' + esc(box.dataset.title) + '</b> · ' + esc(box.dataset.quelle || "") + ' · für den Unterricht gekürzt</p>';
      var player = null, cur = 0, timer = null, playing = false, pending = null, finished = false;
      var fill = box.querySelector(".clip__fill"), time = box.querySelector(".clip__time"), pp = box.querySelector(".clip__pp");
      function done(i) { if (seen.indexOf(i) < 0) { seen.push(i); NS.set(key + ".kap", seen.slice()); } var b = box.querySelector('.clip__chapters button[data-i="' + i + '"]'); if (b) b.classList.add("seen"); if (seen.length === segs.length) { NS.set(key, "angeschaut"); progress(); } }
      function mark() { box.querySelectorAll(".clip__chapters button").forEach(function (b) { b.classList.toggle("is-cur", Number(b.dataset.i) === cur); }); }
      function tick() {
        if (!player || !player.getCurrentTime || !playing) return;
        var t = player.getCurrentTime(), s = segs[cur];
        /* Nach einem Sprung erst warten, bis das Video wirklich im neuen Abschnitt ist */
        if (pending !== null) { if (t >= segs[pending][0] - 2 && t < segs[pending][1]) pending = null; else return; }
        if (t < s[0] - 2) { player.seekTo(s[0], true); return; }
        if (t >= s[1]) {
          done(cur);
          if (cur < segs.length - 1) { cur++; pending = cur; player.seekTo(segs[cur][0], true); mark(); }
          else { playing = false; finished = true; player.pauseVideo(); pp.textContent = "↺"; pp.setAttribute("aria-label", "Nochmal"); cur = 0; mark(); fill.style.width = "100%"; time.textContent = mmss(total) + " / " + mmss(total) + " · fertig"; return; }
        }
        var before = segs.slice(0, cur).reduce(function (a, x) { return a + x[1] - x[0]; }, 0), el = before + Math.max(0, Math.min(t, s[1]) - s[0]);
        fill.style.width = (el / total * 100) + "%"; time.textContent = mmss(el) + " / " + mmss(total);
      }
      function go(i) {
        cur = i; pending = i; finished = false; mark();
        if (player && player.seekTo) { player.seekTo(segs[i][0], true); player.playVideo(); return; }
        box.classList.add("is-loading");
        loadYT().then(function () {
          player = new YT.Player("clipframe" + bi, {
            host: "https://www.youtube-nocookie.com", videoId: box.dataset.yt,
            playerVars: { controls: 0, rel: 0, modestbranding: 1, playsinline: 1, disablekb: 1, iv_load_policy: 3, start: segs[i][0], autoplay: 1 },
            events: {
              onReady: function (e) { box.nsPlayer = e.target; box.classList.remove("is-loading"); box.classList.add("is-on"); e.target.seekTo(segs[cur][0], true); e.target.playVideo(); timer = setInterval(tick, 250); },
              onStateChange: function (e) { playing = e.data === 1; if (finished && !playing) return; pp.textContent = playing ? "❚❚" : "▶"; pp.setAttribute("aria-label", playing ? "Pause" : "Abspielen"); }
            }
          });
        }).catch(function () {
          box.classList.remove("is-loading");
          box.querySelector(".clip__screen").innerHTML = '<div class="clip__err"><p class="h-s">Das Video lädt gerade nicht.</p><p class="small">Kein Internet oder YouTube ist gesperrt. Schau es später an oder frag deine Lehrkraft, ob es am Beamer läuft.</p></div>';
        });
      }
      box.querySelector(".clip__start").addEventListener("click", function () { go(cur); });
      pp.addEventListener("click", function () {
        if (!player) return go(cur);
        if (finished) return go(0);
        if (playing) player.pauseVideo(); else player.playVideo();
      });
      box.querySelectorAll(".clip__chapters button").forEach(function (b) { b.addEventListener("click", function () { go(Number(b.dataset.i)); }); });
      box.querySelector(".clip__fs").addEventListener("click", function () {
        var el = box.querySelector(".clip__screen"), rq = el.requestFullscreen || el.webkitRequestFullscreen;
        if (rq) rq.call(el); else { var f = el.querySelector("iframe"); if (f && f.webkitEnterFullscreen) f.webkitEnterFullscreen(); }
      });
      if (NS.get(key) === "angeschaut") box.classList.add("is-seen");
    });
  }

  /* ---------- Video erst nach Antippen laden (spart Daten im Schul-WLAN) ---------- */
  function initVideos() {
    document.querySelectorAll(".video[data-yt]").forEach(function (v) {
      var btn = v.querySelector(".video__poster");
      btn.addEventListener("click", function () {
        var src = "https://www.youtube-nocookie.com/embed/" + v.dataset.yt + "?autoplay=1&rel=0&modestbranding=1&playsinline=1" +
          (v.dataset.start ? "&start=" + v.dataset.start : "") + (v.dataset.end ? "&end=" + v.dataset.end : "");
        var f = document.createElement("iframe");
        f.src = src; f.title = v.dataset.title || "Video"; f.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen"; f.allowFullscreen = true;
        v.innerHTML = ""; v.appendChild(f);
        if (v.dataset.key) { NS.set(v.dataset.key, "angeschaut"); progress(); }
      });
    });
  }

  /* ---------- Zoom in Fotos ---------- */
  function initZoom() {
    document.querySelectorAll(".zoom").forEach(function (z) {
      z.addEventListener("click", function (e) {
        var r = z.getBoundingClientRect();
        z.style.setProperty("--zx", ((e.clientX - r.left) / r.width * 100) + "%");
        z.style.setProperty("--zy", ((e.clientY - r.top) / r.height * 100) + "%");
        z.classList.toggle("is-zoom");
      });
    });
  }

  /* ---------- Fortschritt: Haken im Inhaltsverzeichnis, Leiste, Jubel bei „geschafft“ ---------- */
  var warFertig = null;
  function progress() {
    var n = NS.current; if (!n) return;
    var teile = STUNDEN[n - 1].teile;
    teile.forEach(function (t) {
      var a = document.querySelector('.toc a[href="' + t.href + '"]');
      if (a) a.classList.toggle("is-done", teilDone(t));
    });
    var st = NS.stand(n), bar = document.querySelector(".prog");
    if (bar) {
      bar.querySelector(".prog__fill").style.width = (st.fertig / st.gesamt * 100) + "%";
      bar.querySelector(".prog__txt").textContent = st.fertig === st.gesamt ? "Station geschafft ✓" : st.fertig + " von " + st.gesamt + " Teilen erledigt";
      bar.classList.toggle("is-done", st.fertig === st.gesamt);
    }
    var fertig = st.fertig === st.gesamt;
    if (fertig && !state.done[n]) { state.done[n] = true; save(); }
    if (warFertig === false && fertig) jubel(n);
    warFertig = fertig;
  }
  function jubel(n) {
    var next = STUNDEN[n];
    var box = document.createElement("div");
    box.className = "toast"; box.setAttribute("role", "status");
    box.innerHTML = '<span class="toast__check" aria-hidden="true">✓</span><div><p class="h-s">Station ' + n + ' geschafft!</p><p class="small">' +
      (next ? "Station " + next.n + " „" + esc(next.titel) + "“ ist jetzt freigeschaltet. Vergiss deinen Lernpass nicht." : "Du hast alle sieben Stationen geschafft. Stark!") +
      '</p></div><button type="button" class="toast__x" aria-label="Schließen">×</button>';
    document.body.appendChild(box);
    box.querySelector(".toast__x").addEventListener("click", function () { box.remove(); });
    setTimeout(function () { box.classList.add("is-in"); }, 20);
    setTimeout(function () { if (box.parentNode) box.remove(); }, 9000);
  }
  NS.progress = progress;

  /* ---------- Mein Lernpass (Druck/PDF) ---------- */
  /* Lernpass als Hefteintrag:
     Seite 1 = Teil 1 „Hefteintrag“ (für alle gleich, Grundlage für die Probe),
     Seite 2 = Teil 2 „Meine Ergebnisse“ (eigene Antworten). */
  NS.printPass = function (n, items) {
    var s = STUNDEN[n - 1], h = s.heft, pass = document.querySelector(".pass");
    var name = (NS.get("name") || "").trim(), heute = new Date().toLocaleDateString("de-DE");
    var kopf = function (teil) {
      return '<header class="hp-kopf"><span>GPG · NS-Zeit 1933–1945 · Station ' + n + ' · ' + teil + '</span>' +
        '<span>Name: ' + (name ? '<b>' + esc(name) + '</b>' : '<i class="hp-linie"></i>') + '&nbsp;&nbsp; Datum: ' + heute + '</span></header>';
    };
    var html = '<section class="hp-seite">' + kopf("Teil 1: Hefteintrag") +
      '<div class="hp-titel"><p class="hp-jahr">' + esc(s.jahr) + '</p><h1>' + esc(s.titel) + '</h1><p class="hp-frage">' + esc(h.frage) + '</p></div>' +
      '<div class="hp-oben"><img class="hp-foto" src="../img/foto/' + h.foto + '.jpg" alt="">' +
        '<div class="hp-kasten hp-wichtig"><p class="hp-label">Das Wichtigste</p><p>' + esc(h.text) + '</p></div></div>' +
      '<div class="hp-kasten hp-merke"><p class="hp-label">Das musst du für die Probe können</p><ol>' +
        s.merke.map(function (m) { return '<li>' + esc(m) + '</li>'; }).join("") + '</ol></div>' +
      '<div class="hp-zwei"><div class="hp-kasten"><p class="hp-label">Wichtige Daten</p><ul class="hp-zeit">' +
        h.daten.map(function (d) { return '<li><b>' + esc(d[0]) + '</b><span>' + esc(d[1]) + '</span></li>'; }).join("") + '</ul></div>' +
        '<div class="hp-kasten"><p class="hp-label">Fachbegriffe</p><dl class="hp-begriffe">' +
        h.begriffe.map(function (b) { return '<dt>' + esc(b[0]) + '</dt><dd>' + esc(b[1]) + '</dd>'; }).join("") + '</dl></div></div>' +
      '<div class="hp-kasten hp-heute"><p class="hp-label">Damals erkennen, heute erkennen</p><p>' + esc(h.heute) + '</p></div>' +
      '<p class="hp-merksatz">Merksatz: ' + esc(s.kern) + '</p>' +
      '<footer class="hp-fuss">Teil 1 ist für alle gleich und die Grundlage für die Probe. Fotos: Bundesarchiv / Wikimedia Commons, Nachweise auf der Website.</footer></section>';
    html += '<section class="hp-seite hp-neu">' + kopf("Teil 2: Meine Ergebnisse") +
      '<div class="hp-titel hp-titel--klein"><h1>Meine Ergebnisse</h1><p class="hp-frage">Station ' + n + ': ' + esc(s.titel) + '</p></div><div class="hp-antworten">';
    items.forEach(function (it) {
      var v = NS.get(it.key);
      if (v && it.fmt && (typeof v === "object")) v = it.fmt(v);
      else if (Array.isArray(v)) v = v.join(", ");
      else if (v && typeof v === "object") v = Object.keys(v).length + " Einträge";
      html += '<div class="hp-antwort"><p class="hp-frage2">' + esc(it.label) + '</p>' +
        (v ? '<p class="hp-a">' + esc(String(v)) + '</p>' : '<p class="hp-a hp-leer">noch offen</p>') + '</div>';
    });
    var st = NS.stand(n);
    html += '</div><footer class="hp-fuss">Erledigt: ' + st.fertig + ' von ' + st.gesamt + ' Teilen' + (st.fertig === st.gesamt ? ' ✓ Station geschafft' : '') + '</footer></section>';
    pass.innerHTML = html;
    state.pass[n] = true; save();
    document.body.classList.add("printing-pass");
    var img = pass.querySelector("img"), go = function () { setTimeout(function () { window.print(); }, 80); };
    if (img && !img.complete) { img.onload = go; img.onerror = go; } else go();
  };
  window.addEventListener("afterprint", function () { document.body.classList.remove("printing-pass"); });
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  NS.esc = esc;

  /* ---------- Stundenseite: gesperrt? ---------- */
  /* Kein window.prompt: blockiert in installierten Web-Apps. Stattdessen eigenes Feld. */
  NS.guard = function (n) {
    NS.current = n;
    var toc = document.querySelector(".toc");
    if (toc && !document.querySelector(".prog")) {
      var bar = document.createElement("div");
      bar.className = "prog"; bar.innerHTML = '<div class="prog__track"><div class="prog__fill"></div></div><p class="prog__txt"></p>';
      toc.parentNode.insertBefore(bar, toc.nextSibling);
    }
    var hero = document.querySelector(".lesson-hero"), pav = hero && hero.parentNode.querySelector(".pavement");
    if (pav && !document.querySelector(".merke")) {
      var m = document.createElement("section");
      m.className = "merke"; m.setAttribute("aria-label", "Das nimmst du heute mit");
      m.innerHTML = '<p class="label">Das nimmst du heute mit</p><ol>' + STUNDEN[n - 1].merke.map(function (x, i) { return '<li><span>' + (i + 1) + '</span><p>' + esc(x) + '</p></li>'; }).join("") + '</ol>';
      pav.parentNode.insertBefore(m, pav.nextSibling);
    }
    var pb = document.getElementById("pass-btn");
    if (pb && !document.getElementById("pass-name")) {
      var lab = document.createElement("label"); lab.className = "pass-name";
      lab.innerHTML = '<span>Dein Name fürs PDF (bleibt nur auf diesem iPad)</span><input id="pass-name" autocomplete="off" placeholder="Vorname Nachname">';
      pb.parentNode.parentNode.insertBefore(lab, pb.parentNode);
      var inp = lab.querySelector("input"); inp.value = NS.get("name") || "";
      inp.addEventListener("input", function () { NS.set("name", inp.value); });
    }
    warFertig = NS.isDone(n); progress();
    if (NS.isOpen(n)) return;
    var box = document.createElement("div");
    box.className = "lockscreen";
    box.innerHTML = '<div class="block"><p class="label">Station ' + n + ' ist noch gesperrt</p>' +
      '<p class="h-m" style="margin:8px 0 10px">Schaffe zuerst Station ' + (n - 1) + '</p>' +
      '<p class="small" style="margin-bottom:16px">Sobald alle Teile von Station ' + (n - 1) + ' einen grünen Haken haben, öffnet sich diese Station von selbst.</p>' +
      '<a class="btn btn--lila" href="../stunde-' + (n - 1) + '/index.html">Zu Station ' + (n - 1) + '</a>' +
      '<details style="margin-top:18px"><summary class="small" style="cursor:pointer;font-weight:600">Ich habe gefehlt: Code von der Lehrkraft</summary>' +
      '<form class="station__lock" style="margin-top:10px"><input autocomplete="off" autocapitalize="characters" aria-label="Code"><button class="btn">Öffnen</button></form>' +
      '<p class="station__msg"></p></details></div>';
    document.body.appendChild(box);
    var f = box.querySelector("form"), msg = box.querySelector(".station__msg");
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      if (NS.tryCode(n, f.querySelector("input").value)) box.remove();
      else msg.textContent = "Der Code stimmt nicht.";
    });
  };

  document.addEventListener("DOMContentLoaded", function () {
    initReveal(); initAnswers(); initChoices(); initMatch(); initSorter(); initOrder(); initBars(); initVideos(); initClips(); initZoom(); progress();
  });
})();
