package china.unicom.v3;
import com.jfinal.plugin.activerecord.Model;
import com.jfinal.plugin.activerecord.Page;

@SuppressWarnings("serial")
public class Unicom extends Model<Unicom> {
	public static final Unicom me = new Unicom();

	public Page<Unicom> paginate(int pageNumber, int pageSize) {
		return paginate(pageNumber, pageSize, "select *", "from blog order by id asc");
	}
}
