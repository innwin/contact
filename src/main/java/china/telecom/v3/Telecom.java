package china.telecom.v3;
import com.jfinal.plugin.activerecord.Model;
import com.jfinal.plugin.activerecord.Page;

@SuppressWarnings("serial")
public class Telecom extends Model<Telecom> {
	public static final Telecom me = new Telecom();
	public Page<Telecom> paginate(int pageNumber, int pageSize) {
		return paginate(pageNumber, pageSize, "select *", "from blog order by id asc");
	}
}
