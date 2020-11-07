package dto;

import entities.Chuck;
import entities.Dad;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author David
 */
public class OurDTO {

    private String joke1;
    private String joke1Reference;
    private String joke2;
    private String joke2Reference;

    public OurDTO(Chuck joke1, Chuck joke1Reference, Dad joke2, Dad joke2Reference) {
        this.joke1 = joke1.getJoke();
        this.joke1Reference = joke1Reference.getJoke();
        this.joke2 = joke2.getJoke();
        this.joke2Reference = joke2Reference.getJoke();
    }

    public OurDTO(String joke1, String joke2) {
        this.joke1 = joke1;
        this.joke2 = joke2;
    }
    
    public OurDTO() {
    }

    public String getJoke1() {
        return joke1;
    }

    public void setJoke1(String joke1) {
        this.joke1 = joke1;
    }

    public String getJoke1Reference() {
        return joke1Reference;
    }

    public void setJoke1Reference(String joke1Reference) {
        this.joke1Reference = joke1Reference;
    }

    public String getJoke2() {
        return joke2;
    }

    public void setJoke2(String joke2) {
        this.joke2 = joke2;
    }

    public String getJoke2Reference() {
        return joke2Reference;
    }

    public void setJoke2Reference(String joke2Reference) {
        this.joke2Reference = joke2Reference;
    }
    
}
