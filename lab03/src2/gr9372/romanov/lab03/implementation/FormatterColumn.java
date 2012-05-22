package gr9372.romanov.lab03.implementation;

import java.util.Collection;

import gr9372.romanov.lab03.holder.Formatter;

public class FormatterColumn implements Formatter {

    @Override
    public void out(Collection<Integer> data) {
        for (int e : data) {
            System.out.println(e);
        }
    }

}
