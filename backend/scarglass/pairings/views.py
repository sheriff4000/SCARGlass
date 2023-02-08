from rest_framework import generics, response
from .models import PairingModel
from .serializers import PairingSerializer
from django.db.models import Q
from datetime import date, timedelta

class PairingList(generics.ListAPIView):
  def filter_queryset(self, queryset):
    pair = self.request.query_params.get('pair')
    five_minutes_ago = django.utils.timezone.now() + datetime.timedelta(minutes=-5)
    if pair:
      queryset = queryset.filter(Q(paired=True) & Q(date__gte = five_minutes_ago))

  def list(self, request):
    queryset = self.filter_queryset(self.get_queryset())
    serializer = PairingSerializer(queryset, many=True)
    return response.Response(serializer.data)

class PairingCreate(generics.CreateAPIView):
  queryset = PairingModel.objects.all()
  serializer_class = PairingSerializer()

class PairingDetail(generics.RetrieveUpdateDestroyAPIView):
  queryset = PairingModel.objects.all()
  serializer_class = PairingSerializer