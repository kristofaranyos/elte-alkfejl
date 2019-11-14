### Alkalmazasok fejlesztese beadando

**Aranyos Kristof**  
**Fuisz Marcell**

---

Az alkalmazas egy tobb raktar kezelesere kepes leltar rendszer.

feladat funkcionális követelményeit
feladat nem funkcionális követelményei
szakterületi fogalomjegyzék (azon fogalmak definiálása, ami köré az alkalmazás épül)
szerepkörök

---

**Fejlesztoi kornyezet:**  
Az backend Java alapu, Mavent hasznal a fuggosegek kezelesere, igy szinte az osszes letezo Javat tamogato IDE kepes megnyitni.
IntelliJ IDEA preferalt.

Az alkalmazas alapja Spring Boot, H2 adatbazissal. Futtatasa: ```mvn spring-boot:run```

**Adatbazis terv:**  
A Stock tabla reprezentalja az Item es Warehouse kozti n-n kapcsolatot, csak azert 2 darab 1-n-el lett megoldva,
mert szukseg volt egy plusz oszlopra, amit tisztan @ManyToMany annocatioval nem lehet kifejezni.
![db uml](https://github.com/kristofaranyos/elte-alkfejl/blob/master/db.png)

**Alkalmazott konyvtarstruktura:**
Minden forraskod az src mappaban van. A vegpontokat leiro osztalyok a ```hu.elte.warehouseproject.controllers``` package-ban vannak.  
Az adatstrukturak a ```hu.elte.warehouseproject.entities``` package-ban vannak.  
A ```hu.elte.warehouseproject.repositories``` es ```hu.elte.warehouseproject.security``` package-ban seged osztalyok vannak.

**Vegpontok:**
Jeloles: ```/``` jeloli a document rootot, vagyis a ```http://valami.hu/``` cimet.  
Minden vegpont belepest igenyel. Az alkalmazas az ```Authorization: Basic ...``` HTTP fejlecet hasznalja minden keres melle.

```/```: Egy sima hello world uzenet, hogy ha direktben meghivja valaki a domaint a bongeszobol, akkor ne ures legyen.

GET ```/item```: Kilistazza az adatbazisban levo termekeket.  
GET ```/item/id```: Kilistazza az adott id-ju termeket.  
GET ```/item/search/term```: Kilistazza a termekeket, amiknek a neveben szerepel az adott kifejezes.  
GET ```/item/getlocationof/id```: Kilistazza azokat a raktarakat, ahol eppen van a termekbol.  
POST ```/item```: Letrehoz egy uj termeket.  
PUT ```/item/id```: Modositja az adott id-ju termeket.  
DELETE ```/item/id```: Torli az adott id-ju termeket

GET ```/stock```: Kilistazza az adatbazisban levo keszletet.  
GET ```/stock/id```: Kilistazza az adott id-ju keszletet.  
POST ```/stock```: Letrehoz egy uj keszletet.  
PUT ```/stock/id```: Modositja az adott id-ju keszletet.  
DELETE ```/stock/id```: Torli az adott id-ju keszletet

GET ```/vendor```: Kilistazza az adatbazisban levo gyartokat.  
GET ```/vendor/id```: Kilistazza az adott id-ju gyartot.  
GET ```/vendor/search/term```: Kilistazza a gyartokat, amiknek a neveben szerepel az adott kifejezes.  
GET ```/vendor/getitems/id```: Kilistazza azokat a termekeket, amiket egy adott gyarto csinalt.  
POST ```/vendor```: Letrehoz egy uj gyartot.  
PUT ```/vendor/id```: Modositja az adott id-ju gyartot.  
DELETE ```/vendor/id```: Torli az adott id-ju gyartot

GET ```/warehouse```: Kilistazza az adatbazisban levo raktarakat.  
GET ```/warehouse/id```: Kilistazza az adott id-ju raktarat.  
GET ```/warehouse/getitems/id```: Kilistazza azokat a termekeket, amik az adott raktarban vannak    .  
POST ```/warehouse```: Letrehoz egy uj raktarat.  
PUT ```/warehouse/id```: Modositja az adott id-ju raktarat.  
DELETE ```/warehouse/id```: Torli az adott id-ju raktarat

Egy vegpont leirasa:  
Legyen a vegpont GET ```/item/id```.

A kliens kuld egy HTTP GET kerest a szervernek. Az alkalmazas alapbol a 8080-as porton figyeli a beerkezo kereseket.  
A Spring keretrendszer automatikusan ertelmezi a lekerdezest es a megfelelo @RestController-rel annotalt osztaly megfelelo metodusanak adja a vezerlest.  
Ha vannak parameterek, akkor azokat is atadja. Itt peldaul az ```ItemController``` osztaly ```getOne()``` metodusa hivodik meg, az id parameter pedig a lekerdezes utolso / utani resze lesz.  
A metodus az ```itemRepository```-n keresztul lekeri az adatbazisbol ad azott id-ju termeket. Nem biztos hogy van, ezert Optional<> kent kapja meg.  
Ezutan megnezi, hogy letezik-e az adott termek, es ha nem, akkor hibat ad vissza. Ha letezik, visszadja azt.  
A Spring automatikusan atalakitja json-na az adott objektumot, amit visszaadunk.