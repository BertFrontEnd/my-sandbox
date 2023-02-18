/* Определите в программе модель «однорукого бандита»
с тремя колесами, которые могут вращаться по отдельности
вызовом spin(), а затем выводит текущие значения всех
колес вызовом display(). Базовое поведение одного колеса
определяется приведенным ниже объектом reel. Однако игровому
автомату потребуются отдельные объекты reel, которые
делегируют обращения reel, и каждый из этих объектов
должен иметь свойство position.

Объект reel умеет только выводить свой текущий символ на
колесе вызовом display(), но «однорукие бандиты» обычно
выводят по три символа на колесо: текущую позицию (position),
позицию выше (position - ­1) и позицию ниже (position + 1).
Таким образом, при выводе «однорукого бандита» должна
выводиться сетка символов 3 x 3. */