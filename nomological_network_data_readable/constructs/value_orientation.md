# Value orientation
**Type:** Construct  
**Referenced in:** 4 papers  
**Also known as:** Alignment preferences, Value priorities, Implicit values  

## State of the Field

**Definition agreement:** Consensus. All three papers define value orientation as an underlying set of preferences or principles that guide a model's responses or decisions on human value-laden issues. The differences are mostly in wording and examples, with all papers pointing to the same core property of latent value-guiding tendencies rather than different phenomena.

**Space of definitions.** Across the surveyed definitions, the prevailing usage treats value orientation as an underlying, often latent or implicit disposition, tendency, or set of principles that guides how an LLM responds, expresses views, or makes judgments. Papers largely agree that it concerns preferences about human values, with examples ranging from individualism and family importance to environmentalism, diversity, and community. Smaller variations are mostly about scope: some definitions emphasize cross-context response tendencies, some narrow it to views on political leanings and moral situations, and some frame it as context-specific principles that operate even when the task does not state them explicitly.

**Space of facets.** Across papers, the construct appears under overlapping labels, including alignment preferences, value priorities, and implicit values, which all describe value-guided tendencies or principles. One formulation places it beside reasoning patterns and linguistic style as one of the dimensions used in interlocutor inference, while another distinguishes implicit values from explicit task instructions by focusing on principles that guide decision-making even when the task does not state them.

**Space of measurement.** Operationalization is concentrated in 2 linked measurement instruments, Value Kaleidoscope and the World Values Survey, and papers link the construct to no behavioral indicators. Value Kaleidoscope is used as a probe of models' views on political topics and moral situations, while the World Values Survey supplies human respondents' values for comparison. These operationalizations target elicited value judgments and human-model comparisons, and one paper also examines how much model behavior agrees with values obtained from different probing methods, while another audits everyday-task completions by comparing LLM output distributions with human outcomes.

**Links.** The recorded non-measurement links are all related links. One paper relates interlocutor awareness to value orientation by examining alignment preferences together with reasoning patterns and linguistic style in interlocutor inference, and another relates alignment to value orientation by asking to what degree LLMs' distributions of implicit values are aligned with humans' distributions.

## Sources

**[Revisiting LLM Value Probing Strategies: Are They Robust and Expressive?](https://aclanthology.org/2025.emnlp-main.7.pdf)**
> The latent disposition of an LLM reflecting its preference for certain human values (e.g., individualism, family importance) that shape its responses and decisions across contexts.

**[Agent-to-Agent Theory of Mind: Testing Interlocutor Awareness among Large Language Models](https://aclanthology.org/2025.emnlp-main.1471.pdf) (as "Alignment preferences")**
> A model's underlying tendencies in expressing views on topics involving human values, political leanings, and moral situations.

**[Implicit Values Embedded in How Humans and LLMs Complete Subjective Everyday Tasks](https://aclanthology.org/2025.emnlp-main.847.pdf) (as "Implicit values")**
> Fundamental principles that guide decision-making in a given context, even when not explicitly stated in the task, reflecting culturally situated preferences such as environmentalism, diversity, or community.

## Relationships

### Value orientation →
- **World Values Survey** (measurements) — *measured_by*
  > We use the seventh wave of the World Values Survey (Haerpfer et al., 2022), which asks more than 129K human respondents from a wide range of demographic groups for their values. (Section 6)
  - [Revisiting LLM Value Probing Strategies: Are They Robust and Expressive?](https://aclanthology.org/2025.emnlp-main.7.pdf)
- **Value Kaleidoscope** (measurements) — *measured_by*
  > Lastly, for alignment preferences, we use Anthropic’s Election Questions (Anthropic, 2024) and Value Kaleidoscope (Sorensen et al., 2024a) to probe models’ views on political topics and moral situations (Section 2.2).
  - [Agent-to-Agent Theory of Mind: Testing Interlocutor Awareness among Large Language Models](https://aclanthology.org/2025.emnlp-main.1471.pdf)

### Associated with
- **Interlocutor awareness** (constructs)
  > We examine interlocutor inference across three dimensions—reasoning patterns, linguistic style, and alignment preferences—and show that LLMs reliably identify same-family peers and certain prominent model families (Abstract).
  - [Agent-to-Agent Theory of Mind: Testing Interlocutor Awareness among Large Language Models](https://aclanthology.org/2025.emnlp-main.1471.pdf)
- **Alignment** (constructs)
  > To what degree are LLMs’ distributions of implicit values aligned with humans’ distributions? (Section 1)
  - [Implicit Values Embedded in How Humans and LLMs Complete Subjective Everyday Tasks](https://aclanthology.org/2025.emnlp-main.847.pdf)
