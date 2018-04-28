#!/bin/bash
cd frames/
X=1
while [ $X -le 98 ]
do
	mv refcampvid_000$X.jpg campvid$X.jpg
	X=$((X+1))
done
