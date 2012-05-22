package gr9372.romanov.lab03.holder;

import java.util.*;

/**
 * Selector реализует интерфейс Iterator. Конкретные реализации класса должны
 * проходить по переданному итератору, отфильтровывая ненужные элементы.
 */
public interface Selector extends Iterator<Integer> {

    /**
     * Устанавливает data для последуюего создания iterator'ов, из которых берутся значения.
     */
    void setData(List<Integer> data);
}
