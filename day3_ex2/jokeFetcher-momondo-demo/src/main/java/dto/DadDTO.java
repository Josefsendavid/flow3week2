package dto;

import entities.Dad;

/**
 *
 * @author David
 */
public class DadDTO {
    
    public int id;
    public String joke;

    public DadDTO(Dad d) {
        this.id = d.getId();
        this.joke = d.getJoke();
    }

    public DadDTO() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getJoke() {
        return joke;
    }

    public void setJoke(String joke) {
        this.joke = joke;
    }
    
}
