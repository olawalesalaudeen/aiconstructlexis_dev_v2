# Knowledge conflict resolution
**Type:** Construct  
**Referenced in:** 5 papers  
**Also known as:** Situated faithfulness  

## State of the Field

**Definition agreement:** Too little evidence.

**Space of definitions.** Across the definitions, the shared framing treats knowledge conflict resolution as an ability for handling conflicts between a model's internal knowledge and externally provided context. One paper defines it as reconciling contradictions between parametric knowledge and contextual information, and describes models as facing competing claims between internal knowledge and external evidence. Another uses the name situated faithfulness and defines the ability more specifically as giving the correct answer by dynamically calibrating trust between internal knowledge and external context, regardless of whether the context is correct or incorrect. The main difference is whether the construct is stated broadly as contradiction reconciliation or more specifically as correct answering through trust calibration.

**Space of facets.** Papers offer only limited systematization. One paper says the construct has a multidimensional nature, while another makes the correctness of the external context an explicit organizing condition by requiring correct answers whether that context is right or wrong. There is also a naming split: some work uses knowledge conflict resolution for the broader contradiction-handling ability, while another uses situated faithfulness for the internal-versus-external trust calibration version. No construct-to-construct linkage is reported.

**Space of measurement.** Operationalization is benchmark-based: papers link the construct to 6 measurement instruments and 3 behavioral indicators. Among the linked instruments, papers use CounterFact, DynamicQA, FreshQA, Natural Questions, and PopQA, plus 1 other instrument; the evidence describes these as question-answering or conflict-evaluation tasks, with DynamicQA designed to evaluate handling knowledge conflicts from evolving real-world information and CounterFact used to study resolving in-context knowledge conflicts. This measurement style follows the same internal-versus-external conflict setting described in the definitions, though papers differ on whether success is framed as general reconciliation or correct answering through calibrated trust.

**Links.** Beyond measurement, one paper claims a causal relationship from knowledge conflict resolution to question answering, reporting increased QA accuracy across datasets and conflict types. Separate papers report that knowledge conflict resolution is related to machine reading comprehension, described as requiring strong reading comprehension to interpret and extract accurate information as well as confidence reasoning, and that contradiction detection is related to knowledge conflict resolution in work that identifies and resolves detailed points of knowledge conflict. No correlational link is reported.

## Sources

**[Continuously Steering LLMs Sensitivity to Contextual Knowledge with Proxy Models](https://aclanthology.org/2025.emnlp-main.233.pdf)**
> The cognitive ability of an LLM to handle and reconcile contradictions between its internal parametric knowledge and external information provided in the context.

**[To Trust or Not to Trust? Enhancing Large Language Models' Situated Faithfulness to External Contexts](https://proceedings.iclr.cc/paper_files/paper/2025/file/186a213d720568b31f9b59c085a23e5a-Paper-Conference.pdf) (as "Situated faithfulness")**
> The ability of a model to provide a correct answer by dynamically calibrating its trust between its internal knowledge and an external context, regardless of whether the context is correct or incorrect.

## Relationships

### Knowledge conflict resolution →
- **CounterFact** (measurements) — *measured_by*
  > We evaluate the effectiveness of PASTA at ... (iii) resolving in-context knowledge conflicts. For (iii), we study ... CounterFact (Meng et al., 2022a).
  - [Tell Your Model Where to Attend: Post-hoc Attention Steering for LLMs](https://proceedings.iclr.cc/paper_files/paper/2024/file/b99d6cc40b05809c3d84b57a165448cd-Paper-Conference.pdf)
- **FreshQA** (measurements) — *measured_by*
  > We benchmark the current LLM’s ability to perform situated faithful reasoning on several question-answering tasks, including FreshQA (Vu et al., 2023), NaturalQA (Kwiatkowski et al., 2019), TriviaQA (Joshi et al., 2017), PopQA (Mallen et al., 2023).
  - [To Trust or Not to Trust? Enhancing Large Language Models' Situated Faithfulness to External Contexts](https://proceedings.iclr.cc/paper_files/paper/2025/file/186a213d720568b31f9b59c085a23e5a-Paper-Conference.pdf)
- **Natural Questions** (measurements) — *measured_by*
  > We benchmark the current LLM’s ability to perform situated faithful reasoning on several question-answering tasks, including FreshQA (Vu et al., 2023), NaturalQA (Kwiatkowski et al., 2019), TriviaQA (Joshi et al., 2017), PopQA (Mallen et al., 2023).
  - [To Trust or Not to Trust? Enhancing Large Language Models' Situated Faithfulness to External Contexts](https://proceedings.iclr.cc/paper_files/paper/2025/file/186a213d720568b31f9b59c085a23e5a-Paper-Conference.pdf)
- **TriviaQA** (measurements) — *measured_by*
  > We benchmark the current LLM’s ability to perform situated faithful reasoning on several question-answering tasks, including FreshQA (Vu et al., 2023), NaturalQA (Kwiatkowski et al., 2019), TriviaQA (Joshi et al., 2017), PopQA (Mallen et al., 2023).
  - [To Trust or Not to Trust? Enhancing Large Language Models' Situated Faithfulness to External Contexts](https://proceedings.iclr.cc/paper_files/paper/2025/file/186a213d720568b31f9b59c085a23e5a-Paper-Conference.pdf)
- **PopQA** (measurements) — *measured_by*
  > We benchmark the current LLM’s ability to perform situated faithful reasoning on several question-answering tasks, including FreshQA (Vu et al., 2023), NaturalQA (Kwiatkowski et al., 2019), TriviaQA (Joshi et al., 2017), PopQA (Mallen et al., 2023).
  - [To Trust or Not to Trust? Enhancing Large Language Models' Situated Faithfulness to External Contexts](https://proceedings.iclr.cc/paper_files/paper/2025/file/186a213d720568b31f9b59c085a23e5a-Paper-Conference.pdf)
- **Question answering** (behaviors tasks) — *causes*
  > MICRO-ACT consistently achieves significant increase in QA accuracy over state-of-the-art baselines across all 5 datasets and 3 conflict types, especially in temporal and semantic types where all baselines fail significantly. (Abstract)
  - [Micro-Act: Mitigate Knowledge Conflict in Question Answering via Actionable Self-Reasoning](https://aclanthology.org/2025.acl-long.909.pdf)
- **DynamicQA** (measurements) — *measured_by*
  > DynamicQA is designed to evaluate LLMs’ ability to handle knowledge conflicts arising from evolving real-world information. (Section 3.4)
  - [Continuously Steering LLMs Sensitivity to Contextual Knowledge with Proxy Models](https://aclanthology.org/2025.emnlp-main.233.pdf)

### Associated with
- **Machine reading comprehension** (behaviors tasks)
  > To achieve this, it requires strong reading comprehension skills to interpret and extract accurate information as well as confidence reasoning...
  - [To Trust or Not to Trust? Enhancing Large Language Models' Situated Faithfulness to External Contexts](https://proceedings.iclr.cc/paper_files/paper/2025/file/186a213d720568b31f9b59c085a23e5a-Paper-Conference.pdf)
- **Contradiction detection** (behaviors tasks)
  > We introduce MICRO-ACT, a framework that enables Large Language Models (LLMs) to automatically identify and resolve detailed points of knowledge conflict. (Section 4)
  - [Micro-Act: Mitigate Knowledge Conflict in Question Answering via Actionable Self-Reasoning](https://aclanthology.org/2025.acl-long.909.pdf)
