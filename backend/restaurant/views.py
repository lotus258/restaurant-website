from django.shortcuts import render
from rest_framework import generics, viewsets, permissions
from .models import Menu, Booking, Category
from .serializers import MenuItemSerializer, BookingSerializer, UserSerializer, CategorySerializer
from rest_framework.decorators import permission_classes, api_view
from django.contrib.auth.models import User
from django.core.paginator import Paginator, EmptyPage
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
def index(request):
    return render(request, 'index.html', {})

@api_view(['GET','POST'])
# @permission_classes([IsAuthenticated])
def menu_items(request):
    if(request.method == 'GET'):
        items = Menu.objects.select_related('category').all()
        category_name = request.query_params.get('category')
        to_price = request.query_params.get('to_price')
        search = request.query_params.get('search')
        ordering = request.query_params.get('ordering')
        perpage = request.query_params.get('perpage', default=10)
        page = request.query_params.get('page', default=1)
        if category_name:
            items = items.filter(category__title=category_name)
        if to_price:
            items = items.filter(price__lte=to_price)
        if search:
            items = items.filter(title__contains=search)
        if ordering:
            ordering_fields = ordering.split(",")
            items = items.order_by(*ordering_fields)
        paginator = Paginator(items, per_page=perpage)
        try:
            items = paginator.page(number=page)
        except EmptyPage:
            items = []
        serialized_item = MenuItemSerializer(items.object_list, many=True, context={'request': request})

        pagination_data = {
            'count': paginator.count,
            'next': items.has_next() and items.next_page_number() or None,
            'previous': items.has_previous() and items.previous_page_number() or None,
            'results': serialized_item.data
        }

        return Response(pagination_data, status.HTTP_200_OK)

    elif(request.method == 'POST'):
        user = request.user
        if user.is_superuser:
            serialized_item = MenuItemSerializer(data = request.data)
            serialized_item.is_valid(raise_exception=True)
            serialized_item.save()
            return Response(serialized_item.data, status.HTTP_201_CREATED)
        else:
            return Response({'message':'not authorized'}, status.HTTP_403_FORBIDDEN)

@api_view(['GET','POST'])
# @permission_classes([IsAuthenticated])
def categories(request):
    if request.method == 'GET':
        categories = Category.objects.all()
        serialized_category = CategorySerializer(categories, many=True)
        return Response(serialized_category.data, status.HTTP_200_OK)
    elif request.method == 'POST':
        user = request.user
        if user.is_superuser:
            serialized_item = CategorySerializer(data=request.data)
            serialized_item.is_valid()
            serialized_item.save()
            return Response(serialized_item.data, status.HTTP_201_CREATED)
        else:
            return Response({'message':'error'}, status.HTTP_403_FORBIDDEN)
    return Response({'message':'error'}, status.HTTP_403_FORBIDDEN)

class SingleMenuItemView(generics.RetrieveUpdateAPIView, generics.DestroyAPIView):
    queryset = Menu.objects.all()
    serializer_class = MenuItemSerializer
    permission_classes = [permissions.IsAuthenticated]

class BookingViewSet(viewsets.ModelViewSet):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
    # permission_classes = [permissions.IsAuthenticated]

class UserViewSet(viewsets.ModelViewSet):
   queryset = User.objects.all()
   serializer_class = UserSerializer
   permission_classes = [permissions.IsAuthenticated]