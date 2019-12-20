### Alkalmazasok fejlesztese beadando frontend

**Aranyos Kristof**  
**Fuisz Marcell**

---

kliensoldali szolgáltatások listája, rövid leírással

stock: leltarhoz hozzaadas, leltarbol torles, modositas  
products: uj termek hozzaadasa, torles, modositas  
warehouse: same  
vendor: same 

---

egy funkció folyamatának leírása, azaz mi történik kattintástól a visszajelzésig

funkcio pl stock modositas:  

1. listabol kivalasztjuk mit akarunk modositani  
2. a frontend router a megfelelo oldalra megy, kiolvassa az url-bol az id-t  
3. lekeri a backend api-tol az adatokat, es beleirja a form-ba  
4. a felhasznalo modositja a formot, elkuldi  
5. kiolvassa a form adatait, lekeri a megfelelo adatokat (item, warehouse, id-k alapjan)
6. belerakja az adatokat egy objektumba, aztan elkuldi az api-nak 
7. api elmenti  

---

kapcsolat a szerverrel

eleg egyszeru, a backend egy rest api, az angular frontend pedig az alap httpclient-jevel ker es kuld adatot

---

felhasználói dokumentáció

literally egy weboldal, kattintgasd vegig a felso menut, intuitiv