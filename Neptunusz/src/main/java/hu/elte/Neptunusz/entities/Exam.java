package hu.elte.Neptunusz.entities;

import java.time.LocalTime;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.CreationTimestamp;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Exam {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@ManyToOne
	@JsonIgnore
	private Subject subject;
	
	@Column(nullable = false,name="START_OF_EXAM")
	private String examStart;
	
	@Column(nullable = false,name="END_OF_EXAM")
	private String examEnd;
	
	@Column(nullable = false)
	private String classroom;
	
	@Column(nullable = false)
    @Enumerated(EnumType.STRING)
	private ExamType type;
	
	@Column(nullable = false)
    private Boolean is_del;
	
	@ManyToMany(mappedBy = "exams")
	@JsonIgnore
	private List<User> examers;
	
	public enum ExamType{
		WRITING,ORAL,WRITING_AND_ORAL;
	}
	
}
