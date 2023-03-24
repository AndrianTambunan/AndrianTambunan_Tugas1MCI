#### Andrian Tambunan - 5025211018

##### In this particular task, we'll use [DATA_FIX.csv](https://github.com/AndrianTambunan/AndrianTambunan_Tugas1MCI/files/11060157/DATA_FIX.csv) as a reference.
##### Table yang digunakan
```
CREATE TABLE DataFix(
	nrp char(10) PRIMARY KEY NOT NULL,
	nama varchar(20),
	usia int,
	semester int,
	ipk decimal (3,2),
	ukt decimal (10,2)
);
```
##### Import file .csv ke dalam Postgresql
```
COPY DataFix 
FROM 'C:\Users\asus\Downloads\DATA_FIX.csv' //Letak file .csv
DELIMITER ',' CSV HEADER; //Determine delimiter
```
##### 1. Tampilkan daftar nama dan ukt berdasarkan nominal ukt yang paling mahal!
```
SELECT nrp, nama, ukt
FROM DataFix
ORDER BY ukt DESC; 
```
##### Maka dapat diperoeh hasil sebagai berikut:
![Screenshot 2023-03-24 155547](https://user-images.githubusercontent.com/100081922/227471979-64a6db76-69d0-4388-a677-1b39b8f66714.png)

#### 2. Tampilkan semua daftar nama dan ukt berdasarkan nominal ukt yang paling mahal, jika ada ukt yang sama, urutkan berdasarkan nama mahasiswa secara alfabetikal.
```
SELECT nrp, nama, ukt
FROM DataFix
ORDER BY ukt DESC, nama;
```
##### Maka dapat diperoeh hasil sebagai berikut:
![2](https://user-images.githubusercontent.com/100081922/227474927-553fcfdf-f062-406c-b2c3-d61d3769a4e1.png)

#### 3. Hitunglah jumlah mahasiswa yang memiliki ipk >= 3.5 dan berada di semester 8
```
SELECT COUNT(*) AS jumlah_mahasiswa
FROM DataFix
WHERE ipk >= 3.5 AND semester = 8;
```
##### Maka dapat diperoeh hasil sebagai berikut:
![3](https://user-images.githubusercontent.com/100081922/227475543-267ac218-3c27-4de9-ad3d-9b9fbc6ce20f.png)

#### 4. [Soal Tantangan] Tampilkan nama, ukt, dan golongan. Jika ukt mahasiswa kurang dari sama dengan 1 juta, maka masuk golongan "A". Jika ukt mahasiswa diatas 1 juta sampai denga 2 juta, maka masuk golongan "B" Jika ukt mahasiswa diatas 2 juta, maka masuk golongan "C".
```
SELECT nama, ukt,
CASE
	WHEN ukt <=1000000.00 THEN 'A'
	WHEN ukt > 1000000.00 AND ukt <= 2000000.00 THEN 'B'
	ELSE 'C'
	END AS golongan
FROM DataFix;
```
##### Maka dapat diperoeh hasil sebagai berikut:
![4](https://user-images.githubusercontent.com/100081922/227476137-c52e88ab-b22f-482d-b15a-958d300866a7.png)

#### 5. [Soal Tantangan] Tampilkan daftar nama, semester dan ipk berdasarkan ipk tertinggi tiap semester. Diurutkan berdasarkan semesternya. Jika ada yang nilainya sama, maka diurutkan berdasarkan alfabet.
```
SELECT nama, semester, ipk
FROM public.DataFix
WHERE (semester, ipk) IN(
	SELECT semester, max(ipk)
	FROM public.DataFix
	GROUP BY semester
)
ORDER BY semester, nama;
```
##### Maka dapat diperoeh hasil sebagai berikut:
![5](https://user-images.githubusercontent.com/100081922/227476605-10f79d33-c97a-4a7c-a24c-52f92bba8d21.png)
