import pandas as pd


df = pd.read_csv('your.csv')

num_parts = 1 # amount
chunk_size = len(df) // num_parts


split_data = [df[i*chunk_size:(i+1)*chunk_size] for i in range(num_parts)]


for i, data_chunk in enumerate(split_data):
    data_chunk.to_csv(f'new_{i+1}.csv', index=False)

print("Файл успешно разделен на " + num_parts +" частей.")
