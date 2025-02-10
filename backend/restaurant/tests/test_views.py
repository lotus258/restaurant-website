from django.test import TestCase
from restaurant.models import Menu, Category
from restaurant.serializers import MenuItemSerializer

class MenuViewTest(TestCase):
    def setUp(self):
        self.category_1 = Category.objects.create(slug="noodle", title="noodle")
        self.category_2 = Category.objects.create(slug="drink", title="drink")
        self.menu_item1 = Menu.objects.create(title="Shio Ramen", price=10.99, inventory=50, category=self.category_1)
        self.menu_item2 = Menu.objects.create(title="Tantanmen Ramen", price=13.45, inventory=30, category=self.category_1)
        self.menu_item3 = Menu.objects.create(title="Sprite", price=2.99, inventory=20, category=self.category_2)

    def test_getall(self):
        menu_items = Menu.objects.all()
        serializer = MenuItemSerializer(menu_items, many=True)
        expected_data = [
            {"id": self.menu_item1.id, "title": "Shio Ramen", "price": "10.99", "inventory": 50, "category":2},
            {"id": self.menu_item2.id, "title": "Tantanmen Ramen", "price": "13.45", "inventory": 30, "category":2},
            {"id": self.menu_item3.id, "title": "Sprite", "price": "2.99", "inventory": 20, "category":3},
        ]
        self.assertEqual(serializer.data, expected_data)