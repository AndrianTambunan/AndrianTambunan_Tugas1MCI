CREATE TABLE DataFix(
	nrp char(10) PRIMARY KEY NOT NULL,
	nama varchar(20),
	usia int,
	semester int,
	ipk decimal (3,2),
	ukt decimal (10,2)
);
SELECT *FROM DataFix;
DROP TABLE DataFix;

COPY DataFix 
FROM 'C:\Users\asus\Downloads\DATA_FIX.csv' 
DELIMITER ',' CSV HEADER;

--No.1--
SELECT nrp, nama, ukt
FROM DataFix
ORDER BY ukt DESC;

--No.2--
SELECT nrp, nama, ukt
FROM DataFix
ORDER BY ukt DESC, nama;

--No.3--
SELECT COUNT(*) AS jumlah_mahasiswa
FROM DataFix
WHERE ipk >= 3.5 AND semester = 8;

--No.4--
SELECT nama, ukt,
CASE
	WHEN ukt <=1000000.00 THEN 'A'
	WHEN ukt > 1000000.00 AND ukt <= 2000000.00 THEN 'B'
	ELSE 'C'
	END AS golongan
FROM DataFix;

--No.5--
SELECT nama, semester, ipk
FROM public.DataFix
WHERE (semester, ipk) IN(
	SELECT semester, max(ipk)
	FROM public.DataFix
	GROUP BY semester
)
ORDER BY semester, nama;