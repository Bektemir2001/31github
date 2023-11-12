import json
import csv

with open('your.jsonl', 'r', encoding='utf-8') as json_file, open('output.csv', 'w', newline='', encoding='utf-8') as csv_file:
    csv_writer = csv.writer(csv_file)
    
    csv_writer.writerow(['header1', 'header2', 'header3'])

   
    for line in json_file:
        json_dict = json.loads(line)
        header1 = json_dict.get('header1', '')
        header2 = json_dict.get('header2', '')
        header3 = json_dict.get('header3', '')
        csv_writer.writerow([header1, header2, header3])

