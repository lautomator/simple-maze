#!/usr/bin/python

fin = 'maze-map.txt'
fout = 'maze-map-out.txt'
file = open(fin, 'r')
file_out = open(fout, 'a')
a_line = []

for line in file:
    a_line = line.split(' ')
    if a_line[-1].strip() == 'black':
        # print a_line[0].replace(':', '')
        file_out.write(a_line[0].replace(':', '') + '\n')

file_out.close()
file.close()
