import turtle
import random

# Configuración de la ventana
window = turtle.Screen()
window.bgcolor("white")

# Crear la tortuga
t = turtle.Turtle()
t.speed(10)

# Función para dibujar un pétalo
def petal():
    t.circle(60, 60)   # Curva de 60 grados
    t.left(120)        # Girar para el otro lado
    t.circle(60, 60)   # Curva de 60 grados hacia el otro lado
    t.left(60)         # Posicionar para el siguiente pétalo

# Función para dibujar una flor en una posición específica
def draw_flower(x, y, size):
    t.up()
    t.goto(x, y)       # Mover la tortuga a la posición deseada
    t.down()
    t.color("yellow")  # Color del pétalo
    t.begin_fill()
    for _ in range(6):  # Hacer una flor con 6 pétalos
        t.circle(size, 60)
        t.left(120)
        t.circle(size, 60)
        t.left(60)
    t.end_fill()

    # Dibujar el centro de la flor
    t.up()
    t.goto(x, y - (size / 2))
    t.down()
    t.color("orange")
    t.begin_fill()
    t.circle(size / 3)  # Centro de la flor más pequeño
    t.end_fill()

# Dibujar muchas flores aleatoriamente
for _ in range(10):  # Dibujar 10 flores
    x = random.randint(-200, 200)  # Posición aleatoria en el eje X
    y = random.randint(-200, 200)  # Posición aleatoria en el eje Y
    size = random.randint(30, 70)  # Tamaño aleatorio para las flores
    draw_flower(x, y, size)

# Ocultar la tortuga y mostrar el dibujo
t.hideturtle()

# Mantener la ventana abierta
window.mainloop()
