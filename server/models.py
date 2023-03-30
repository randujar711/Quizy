from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

db = SQLAlchemy() # create an instance of a database connection
migrate = Migrate(db) # associate migration functions to it

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)
    total_score = db.Column(db.Integer, nullable=True, unique=False, default=0)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(), server_onupdate=db.func.now())

    def __init__(self, username, email, password, score):
        self.username = username
        self.email = email
        self.password = password
        self.score = score


    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'score': self.score, 
            'created_at': self.created_at
        }

    def __repr__(self):
        return '<User %r>' % self.username


class Deck(db.Model):
    __tablename__ = 'decks'
    id = db.Column(db.Integer, primary_key=True)
    Title = db.Column(db.String, nullable=False)
    Category = db.Column(db.String, nullable=False)
    Bio = db.Column(db.String, nullable=False)
    Images = db.Column(db.String, nullable=False)

    def __init__(self, Title, Category, Bio, Images):
        self.Title = Title
        self.Category = Category
        self.Bio = Bio
        self.Images = Images

    def to_dict(self):
        return{
            "id": self.id,
            "Title": self.Title,
            "Category": self.Category, 
            "Bio": self.Bio,
            "Images": self.Images,
        }

    def __repr__(self):
        return f'<Deck {self.id}>'