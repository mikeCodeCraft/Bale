# def get_weather():
#     city = city_entry.get()
#     if not city:
#         messagebox.showwarning("No City", "Please enter a city name.")
#         return
#     try:
#         # Make API request
#         url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric"
#         response = requests.get(url).json()
#         # Check for valid response
#         if response.get("main"):
#             temp = response["main"]["temp"]
#             weather = response["weather"][0]["description"].title()
#             humidity = response["main"]["humidity"]
#             wind_speed = response["wind"]["speed"]
#             # Update UI with weather data
#             result_label.config(
#                 text=f"Temperature in {city.title()}: {temp}°C"

#                      f"Condition: {weather}"

#                      f"Humidity: {humidity}%"

#                      f"Wind Speed: {wind_speed} km/h"
#             )
#         else:
#             message = response.get("message", "Unknown error.")
#             messagebox.showerror("Error", f"Failed to get weather: {message.capitalize()}")
#     except requests.exceptions.RequestException as e:
#         messagebox.showerror("Network Error", f"Failed to connect: {e}")