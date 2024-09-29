import streamlit as st
import google.generativeai as genai
st.title("Welcome Here! We will predict the News Reality and Also Provide the crops and fertilizers suggestion")
st.write(" ")
st.write(" ")
st.write(" ")
st.write(" ")
genai.configure(api_key="AIzaSyABuxpA7Hq8FXvE7bLASimMwDm58Dxn1ho")
var=""
def create_gen_model():
    return genai.GenerativeModel('models/gemini-pro')


option = st.selectbox(
    'Select The Service That You Want',
    ('None', 'Crop and Fertilizer prediction', 'News Checker'))


if option=='Crop and Fertilizer prediction':
	st.title("Crop and Fertilizer Predictor")
	soil = st.text_input("Enter The soil type")
	rain = st.text_input("Enter the rain fall in mm")

	st.write(" ")
	st.write(" ")
	if st.button("Check Suitable crops and fertilizers"):
	    model = create_gen_model()
	    var=f"""Only Predict suitable crops and fertilizer needs based on user-provided soil type and average rainfall.
	          Input:
	          Soil Type:{soil}
	          Average Annual Rainfall (mm): {rain} mm"""
	    response=model.generate_content(var)
	    st.header(response.text)
if option=='News Checker':
	st.title("News Checker : Here you can check the news is real or not real")
	query = st.text_input("Enter The News Here:")
	st.write(" ")
	st.write(" ")
	if st.button("Verify News"):
	    model = create_gen_model()
	    var=f"{query} Can you find this story reported by online news sources? If you find then just answer it is real. If you not find, then answer It is not real."
	    response=model.generate_content(var)
	    st.header(response.text)

	    


