# Portfolio (Django Project)
# 🌐 Dhruv Kotadiya Portfolio

**Dhruv Kotadiya Portfolio** is a modern, responsive personal portfolio website built using **Django** (backend) and **HTML, CSS, and JavaScript** (frontend).  
It showcases Dhruv's professional background, projects, skills, and contact details — all presented in a futuristic and interactive design.

---

## 🚀 Features

- **Dynamic Django Backend** — modular structure for scalability and easy updates.
- **Interactive Frontend** — built with HTML, CSS, and JavaScript for smooth animations and transitions.
- **Project Showcase** — cleanly displays projects with images, descriptions, and links.
- **Contact Section** — allows visitors to easily reach out.
- **Fully Responsive Design** — optimized for desktop, tablet, and mobile.
- **Easy Customization** — update content through Django templates.

---

## 🧠 Tech Stack

| Layer | Technology |
|-------|-------------|
| Backend | Django (Python) |
| Frontend | HTML5, CSS3, JavaScript |
| Styling | Custom CSS + Animations |
| Database | SQLite (default Django DB) |
| Server | Django’s built-in development server |

---

## ⚙️ Project Setup Instructions

Follow these steps to run the project on your local system 👇

### 1️⃣ Clone or Download the Repository
If you’ve downloaded the project as a ZIP (e.g., `LU.zip`):
```bash
# Extract the project
unzip LU.zip
cd LU
```

Or, if you cloned it from GitHub:
```bash
git clone https://github.com/yourusername/dhruv-kotadiya-portfolio.git
cd dhruv-kotadiya-portfolio
```

---

### 2️⃣ Create a Virtual Environment

#### 🪟 On Windows:
```bash
python -m venv venv
venv\Scripts\activate
```

#### 🐧 On macOS/Linux:
```bash
python3 -m venv venv
source venv/bin/activate
```

---

### 3️⃣ Install Dependencies

Make sure you have `pip` installed, then run:
```bash
pip install -r requirements.txt
```

If you don’t have a `requirements.txt`, you can install Django manually:
```bash
pip install django
```

---

### 4️⃣ Run Database Migrations

Set up the default SQLite database:
```bash
python manage.py migrate
```

---

### 5️⃣ Start the Development Server
```bash
python manage.py runserver
```

Now open your browser and visit:
```
http://127.0.0.1:8000/
```

You should see your **Dhruv Kotadiya Portfolio** homepage 🎉

---

## 📁 Folder Structure

```
Dhruv_Kotadiya_Portfolio/
│
├── manage.py
├── requirements.txt
├── README.md
│
├── portfolio_project/        # Main Django project folder
│   ├── settings.py           # Project settings
│   ├── urls.py               # URL routing
│   ├── wsgi.py               # Server interface
│   └── ...
│
├── portfolio/                # App folder (main portfolio app)
│   ├── templates/            # HTML templates
│   ├── static/               # CSS, JS, Images
│   ├── views.py              # Django views
│   ├── models.py             # Database models (if any)
│   └── ...
│
└── ...
```

---

## 💡 Useful Django Commands

| Command | Description |
|----------|-------------|
| `python manage.py runserver` | Start the development server |
| `python manage.py makemigrations` | Create new migrations |
| `python manage.py migrate` | Apply migrations |
| `python manage.py createsuperuser` | Create admin user |
| `python manage.py collectstatic` | Collect all static files |

---

## 👨‍💻 Author

**Dhruv Kotadiya**  
Aspiring Full-Stack Developer passionate about building interactive web applications and beautiful user interfaces.

🌍 [LinkedIn](www.linkedin.com/in/dhruv-kotadiya-cte-gecbvn-ict)  
📧 dkotadiya004@gmail.com 
💼 Portfolio: ( https://dhruv-kotadiya-portfolio.onrender.com )
