package rest;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import dto.ChuckDTO;
import dto.DadDTO;
import dto.OurDTO;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.core.MediaType;
import utils.HttpUtils;

/**
 * REST Web Service
 *
 * @author lam
 */
@Path("jokes")
public class JokeResource {

    private static Gson GSON = new GsonBuilder().setPrettyPrinting().create();

    @Context
    private UriInfo context;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getJokes() throws IOException {
        String chuck = HttpUtils.fetchData("https://api.chucknorris.io/jokes/random");
        ChuckDTO chuckDTO = GSON.fromJson(chuck, ChuckDTO.class);
        
        String dad = HttpUtils.fetchData("https://icanhazdadjoke.com");
        DadDTO dadDTO = GSON.fromJson(dad, DadDTO.class);
        
        List<OurDTO> combinedDTO = new ArrayList();
        System.out.println(chuckDTO);
        System.out.println(dadDTO);
        return GSON.toJson(chuckDTO);
    }

}
