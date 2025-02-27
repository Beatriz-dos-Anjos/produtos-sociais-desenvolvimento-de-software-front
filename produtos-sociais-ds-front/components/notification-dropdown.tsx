"use client";

import { useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// Definição das notificações em uma única constante
const notificationsData = {
  ongs: [
    {
      title: "Convite às ONGs",
      date: "23/03/2025",
      text: "Venha fazer parte do nosso time de ONGs parceiras! Use o Bora Impactar para prosperar o artesanato",
    },
  ],
  clientes: [
    {
      title: "Convite aos clientes",
      date: "23/03/2025",
      text: "Contacte os artezãos e compre produtos de qualidade!",
    },
  ],
};

export default function NotificationDropdown({
  closeDropdown,
}: {
  closeDropdown: () => void;
}) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeDropdown]);

  return (
    <div
      ref={dropdownRef}
      className="absolute right-0 mt-2 w-80 z-50 shadow-lg"
    >
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Notificações</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {notificationsData.ongs.length > 0 && (
            <div className="px-4 py-2">
              <h3 className="text-sm font-medium text-primary mb-2">
                Para ONGs
              </h3>
              {notificationsData.ongs.map((notification, index) => (
                <div key={index} className="mb-3 last:mb-0">
                  <div className="flex justify-between items-start">
                    <h4 className="text-sm font-medium">
                      {notification.title}
                    </h4>
                    <span className="text-xs text-muted-foreground">
                      {notification.date}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {notification.text}
                  </p>
                </div>
              ))}
            </div>
          )}

          {notificationsData.ongs.length > 0 &&
            notificationsData.clientes.length > 0 && (
              <Separator className="my-1" />
            )}

          {notificationsData.clientes.length > 0 && (
            <div className="px-4 py-2">
              <h3 className="text-sm font-medium text-primary mb-2">
                Para Clientes
              </h3>
              {notificationsData.clientes.map((notification, index) => (
                <div key={index} className="mb-3 last:mb-0">
                  <div className="flex justify-between items-start">
                    <h4 className="text-sm font-medium">
                      {notification.title}
                    </h4>
                    <span className="text-xs text-muted-foreground">
                      {notification.date}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {notification.text}
                  </p>
                </div>
              ))}
            </div>
          )}

          {notificationsData.ongs.length === 0 &&
            notificationsData.clientes.length === 0 && (
              <div className="px-4 py-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Não há notificações no momento.
                </p>
              </div>
            )}
        </CardContent>
      </Card>
    </div>
  );
}
