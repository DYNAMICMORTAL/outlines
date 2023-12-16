from transformers import pipeline
import assemblyai as aai

# Replace with your API key
aai.settings.api_key = "apikey"

# URL of the file to transcribe
FILE_URL = "/content/call.mp3"

# You can also transcribe a local file by passing in a file path
# FILE_URL = './path/to/file.mp3'

# Transcribe audio to text
transcriber = aai.Transcriber()
transcript = transcriber.transcribe(FILE_URL)
text = transcript.text

# Perform sentiment analysis
sentiment_analyzer = pipeline("sentiment-analysis")
sentiment = sentiment_analyzer(text)

# Print sentiment score and label
print("Sentiment Analysis:")
print(f"Score: {sentiment[0]['score']}, Label: {sentiment[0]['label']}")

# Generate summary
summary = f"Sentiment: {sentiment[0]['label']}\n\nTranscript:\n{text}"

# Print the summary
print(summary)
