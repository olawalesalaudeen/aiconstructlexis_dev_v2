# Legal reasoning
**Type:** Construct  
**Referenced in:** 15 papers  
**Also known as:** Legal document interpretation, Legal multi-hop reasoning, Legal calculation, Interpretive ability  

## State of the Field

**Definition agreement:** Consensus. Most papers define legal reasoning as a model's latent ability to interpret legal texts, rules, principles, or documents and apply them to facts through structured logical inference to produce legally grounded conclusions, judgments, or arguments. A few definitions narrow this to a specific legal task such as reporting requirements or describe the same process more generally as multi-step inference in a legal scenario, but they still study the same core ability rather than a different phenomenon.

**Space of definitions.** Across papers, the prevailing usage treats legal reasoning as a latent ability to interpret legal texts and apply legal rules or principles to facts so as to reach legally grounded conclusions, judgments, or arguments. Many definitions add that this involves structured, logical inference, with references to well-defined logical flow, professional legal judgment, implicit rules, and procedures such as legal syllogism, not only reading surface text. A smaller line of work narrows the construct to particular settings, such as interpreting legal reporting requirements and deciding whether a statement satisfies them, interpreting legal documents to extract their issues or implications, performing multi-hop inference, computing legally relevant periods or amounts, or applying hierarchical interpretation methods.

**Space of facets.** Papers often use the label as an umbrella over multiple reasoning types rather than as a single undifferentiated skill. One recurring breakdown names issue-spotting, rule-recall, rule-application, rule-conclusion, interpretation, and rhetorical understanding; other work carves out legal multi-hop reasoning and legal calculation, and another strand singles out interpretive ability, defined through literal, systematic, purposive, sociological, and historical methods. The same label is therefore used both for broad case analysis and judgment and for narrower faculties such as document interpretation or syllogistic analysis of legal texts.

**Space of measurement.** Operationalization is narrow in the recorded links: papers connect legal reasoning to one measurement instrument, LegalBench, and to no behavioral indicators. LegalBench is used as a benchmark, including its International Citizenship Questions sub-task and problem templates derived from the benchmark, and one description says it contains 162 tasks evaluating various aspects of legal reasoning with balanced accuracy. This benchmark-based operationalization aligns most directly with the broad cross-task definitions, while narrower variants centered on reporting requirements, calculation, or specific interpretation methods are not linked to separate instruments.

**Links.** Recorded links connect it to two constructs, and the non-measurement links are related links rather than causal or correlational ones. Several papers relate legal reasoning to Logical reasoning, describing it alongside multi-hop inference, internal logic, correct conclusions, and syllogistic reasoning frameworks used in legal analysis. One paper also relates it to Specificity, reporting that model responses in legal reasoning often lack logical specificity and may include hallucinations.

## Sources

**[SaulLM-54B & SaulLM-141B: Scaling Up Domain Adaptation for the Legal Domain](https://proceedings.neurips.cc/paper_files/paper/2024/file/ea3f85a33f9ba072058e3df233cf6cca-Paper-Conference.pdf)**
> The latent ability to interpret legal texts, apply legal rules, and draw legally grounded conclusions across diverse legal tasks.

**[SaulLM-54B & SaulLM-141B: Scaling Up Domain Adaptation for the Legal Domain](https://proceedings.neurips.cc/paper_files/paper/2024/file/ea3f85a33f9ba072058e3df233cf6cca-Paper-Conference.pdf) (as "Legal document interpretation")**
> Interpreting legal texts and extracting their meaning, issues, or implications from prompts about legal documents.

**[LexEval: A Comprehensive Chinese Legal Benchmark for Evaluating Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/2cb40fc022ca7bdc1a9a78b793661284-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Legal multi-hop reasoning")**
> Performing multiple logical inference steps to solve a problem based on given contextual information from a legal scenario.

**[LexEval: A Comprehensive Chinese Legal Benchmark for Evaluating Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/2cb40fc022ca7bdc1a9a78b793661284-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Legal calculation")**
> Computing legally relevant time periods, monetary amounts, or other quantifiable values from legal rules and facts.

**[JUREX-4E: Juridical Expert-Annotated Four-Element Knowledge Base for Legal Reasoning](https://aclanthology.org/2025.emnlp-main.188.pdf) (as "Interpretive ability")**
> The capacity to apply hierarchical legal interpretation methods—literal, systematic, purposive, sociological, and historical—to clarify the meaning and application of legal texts in context.

## Relationships

### Legal reasoning →
- **LegalBench** (measurements) — *measured_by*
  > “For Law: We use the International Citizenship Questions sub-task in LegalBench [39].”
  - [BAM! Just Like That: Simple and Efficient Parameter Upcycling for Mixture of Experts](https://proceedings.neurips.cc/paper_files/paper/2024/file/665bb142d4b9f55660cb89bb56a66fe1-Paper-Conference.pdf)

### Associated with
- **Logical reasoning** (constructs)
  > We also rewrite samples to align with the syllogistic reasoning framework common in legal analysis. (Section 3.2)
  - [Unilaw-R1: A Large Language Model for Legal Reasoning with Reinforcement Learning and Iterative Inference](https://aclanthology.org/2025.emnlp-main.915.pdf)
