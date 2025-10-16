'use client';

import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { getUserInfo } from '@/lib/service/opencagedataApi';
import { useCurrencyStore } from '@/lib/stores/currencyStore';
// import { Coordinates } from '../../lib/service/opencagedataApi';

export default function GeolocationChecker() {
  const { currency, setCurrency, initialized, setInitialized } = useCurrencyStore();

  useEffect(() => {
    // ✅ выполняем только при первом запуске и если не было инициализации
    if (initialized || currency) return;

    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    const success = async ({ coords }: GeolocationPosition) => {
      try {
        // ✅ лениво загружаем модуль (ВАЖНО!)
        const { getUserInfo } = await import('@/lib/service/opencagedataApi');
        const data = await getUserInfo({
          latitude: coords.latitude,
          longitude: coords.longitude,
        });

        const iso = data.results[0]?.annotations?.currency?.iso_code;
        if (iso) {
          setCurrency(iso);
          localStorage.setItem('user_currency', iso); // ✅ сохраняем валюту
        }
      } catch (e) {
        console.error('Failed to fetch user currency:', e);
      } finally {
        setInitialized(true); // ✅ отмечаем, что геолокация уже выполнена
      }
    };

    const error = () => setInitialized(true);

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, [initialized, currency, setCurrency, setInitialized]);

  return null;
}
