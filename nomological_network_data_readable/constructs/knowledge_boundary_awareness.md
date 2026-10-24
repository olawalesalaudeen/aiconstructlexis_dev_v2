# Knowledge boundary awareness
**Type:** Construct  
**Referenced in:** 26 papers  
**Also known as:** Knowledge boundary cognition, Knowledge boundary perception, Knowledge boundary, Self-knowledge, Capability awareness, Knowledge awareness, Awareness of knowledge limits, Entity recognition  

## State of the Field

**Definition agreement:** Consensus. Most papers define knowledge boundary awareness as a model's latent ability to recognize the limits of its own knowledge, usually by distinguishing what it knows from what it does not know and whether it can answer reliably, sometimes with implications for uncertainty or external retrieval. A few papers narrow this to specific settings such as multimodal questions or entity recognition, and one paper shifts to identifying cultural entities, but these look like outliers against the dominant shared definition.

**Space of definitions.** Most papers describe knowledge boundary awareness as a latent, often internal ability to recognize the limits of the model's own knowledge and to distinguish what it knows from what it does not, whether over questions, statements, or entities. Many of these definitions tie that recognition to response behavior, such as answering only when the model knows, expressing uncertainty, or avoiding false, unsupported, or overconfident claims. A smaller line of work treats the boundary more as a property or limit of knowledge scope, including whether a query needs external retrieval, whether needed information is absent from the image, or, in one case, whether a specific entity is recognized; one survey further defines the boundary across universal, parametric, and outward dimensions.

**Space of facets.** Papers use several near-synonymous labels for overlapping ideas, including knowledge boundary cognition, perception, awareness, knowledge awareness, self-knowledge, and awareness of knowledge limits, and one paper places capability awareness as a facet of self-awareness concerned with assessing knowledge and skills for a task. The clearest subtype scheme splits knowledge boundary into outward, parametric, and universal forms, while a multimodal cognition account places awareness of knowledge limits at the level of knowing what's unknown and separates it from knowledge acquisition direction. Naming is not fully stable: one paper uses entity recognition for whether the model can recall facts about an entity from internal representations, while another uses the same label for identifying culturally significant entities from images and text.

**Space of measurement.** No measurement instrument is linked to it, and papers link it to 4 behavioral indicators: hallucination, abstention, confidence estimation, and named entity recognition. In practice, papers operationalize the construct through probes or analyses of internal representations and hidden activations, confidence-based procedures such as reasoning step calibration, confidence consistency under question reformulation, or separate answer and confidence prediction, and analyses such as sampling-based inference or semi-open-ended question answering to depict the boundary. One paper measures it by overconfidence, defined as the fraction of incorrect answers where the method was confident about self-knowledge. These operationalizations usually test whether the model knows enough to answer, though some instead frame the boundary as whether external retrieval is needed or whether required information is not shown in the image.

**Links.** Several papers claim a causal relationship from knowledge boundary awareness to hallucination: one says an LLM may begin to hallucinate beyond its knowledge boundary, and another discusses enhancing knowledge boundary awareness while reducing hallucination. One paper also claims a causal relationship from knowledge boundary awareness to abstention, using whether answers lie within the model's parametric knowledge boundary and the retrieval knowledge boundary to divide cases. No correlational link is reported. Papers also relate knowledge boundary awareness to situational awareness, metacognition, named entity recognition, and self-awareness, while epistemic uncertainty awareness, confidence estimation, and believability are separately reported as related to knowledge boundary awareness.

## Sources

**[Analyzing LLMs' Knowledge Boundary Cognition Across Languages Through the Lens of Internal Representations](https://aclanthology.org/2025.acl-long.1174.pdf) (as "Knowledge boundary cognition")**
> The latent ability of an LLM to internally recognize whether a given question or statement falls within or beyond its stored knowledge, enabling discrimination between known and unknown information across languages.

**[Towards Fully Exploiting LLM Internal States to Enhance Knowledge Boundary Perception](https://aclanthology.org/2025.acl-long.1184.pdf) (as "Knowledge boundary perception")**
> The latent ability of an LLM to accurately recognize the limits of its own knowledge, distinguishing between what it knows and does not know.

**[MMBoundary: Advancing MLLM Knowledge Boundary Awareness through Reasoning Step Confidence Calibration](https://aclanthology.org/2025.acl-long.802.pdf)**
> The latent ability of a model to recognize the limits of its own knowledge during reasoning, enabling it to express uncertainty where appropriate and avoid overconfident incorrect assertions.

**[FacLens: Transferable Probe for Foreseeing Non-Factuality in Fact-Seeking Question Answering of Large Language Models](https://aclanthology.org/2025.emnlp-main.937.pdf) (as "Knowledge awareness")**
> The latent ability of an LLM to implicitly recognize whether it possesses the factual knowledge required to correctly answer a given question, as evidenced by patterns in its internal representations prior to response generation.

**[Detecting Knowledge Boundary of Vision Large Language Models by Sampling-Based Inference](https://aclanthology.org/2025.emnlp-main.1458.pdf) (as "Knowledge boundary")**
> The latent property of a VLLM that determines whether a given query falls within the model's internal knowledge scope, distinguishing between what the model knows and what requires external retrieval.

**[Evaluating Large Language Models through Role-Guide and Self-Reflection: A Comparative Study](https://proceedings.iclr.cc/paper_files/paper/2025/file/0b8705a611ed1ce19cdb759031078705-Paper-Conference.pdf) (as "Self-knowledge")**
> The ability of a model to accurately assess its own internal knowledge, distinguishing between what it knows and what it does not, to avoid making false or unsupported claims.

**[Position: LLMs Need a Bayesian Meta-Reasoning Framework for More Robust and Generalizable Reasoning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yan25g/yan25g.pdf) (as "Capability awareness")**
> A facet of self-awareness concerning the model's ability to accurately assess its own knowledge and skills for a given task.

**[Right this way: Can VLMs Guide Us to See More to Answer Questions?](https://proceedings.neurips.cc/paper_files/paper/2024/file/efe4e50d492fedc0dfd2959f3320a974-Paper-Conference.pdf) (as "Awareness of knowledge limits")**
> A metacognitive ability to recognize when the model lacks sufficient information to answer a question accurately, representing the 'knowing what's unknown' level of cognition.

**[Do I Know This Entity? Knowledge Awareness and Hallucinations in Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/c1c44e46358e0fb94dc94ec495a7fb1a-Paper-Conference.pdf) (as "Entity recognition")**
> The latent capacity to distinguish entities the model recognizes from entities it does not recognize, especially from internal representations at the entity token.

## Relationships

### Knowledge boundary awareness →
- **Hallucination** (behaviors tasks) — *causes*
  > “The knowledge boundary of an LLM limits its factual understanding, beyond which it may begin to hallucinate.”
  - [Perception of Knowledge Boundary for Large Language Models through Semi-open-ended Question Answering](https://proceedings.neurips.cc/paper_files/paper/2024/file/a1e0d6fa0c30b7d4f75dd9c7ed6189f2-Paper-Conference.pdf)
- **Layer-wise probing** (measurements) — *measured_by*
  > we are pioneering the investigation into how LLMs perceive and encode knowledge boundaries across languages, as illustrated in Figure 1. Through probing the representations of LLMs, our work reveals novel structural geometry, training-free transfer methods, and training methods to jointly enhance cross-lingual awareness.
  - [Analyzing LLMs' Knowledge Boundary Cognition Across Languages Through the Lens of Internal Representations](https://aclanthology.org/2025.acl-long.1174.pdf)

### Associated with
- **Believability** (constructs)
  > For the agent evaluation, we perform a controlled evaluation to test whether the agents produce believable individual behaviors, where the self-knowledge, reaction and general abilities are evaluated. (Section 1)
  - [RoleAgent: Building, Interacting, and Benchmarking High-quality Role-Playing Agents from Scripts](https://proceedings.neurips.cc/paper_files/paper/2024/file/5875aca1ef70285a35940afbbce0f9fb-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Epistemic uncertainty awareness** (constructs)
  > “We further categorize the awareness of epistemic uncertainty into 3 finegrained types: • Knowledge awareness means understanding that some questions require information or common sense that is not shown in the image.”
  - [CertainlyUncertain: A Benchmark and Metric for Multimodal Epistemic and Aleatoric Awareness](https://proceedings.iclr.cc/paper_files/paper/2025/file/21b5788d81f886ff81671379b4ff9453-Paper-Conference.pdf)
- **Self-awareness** (constructs)
  > Our self-awareness module (Fig. 3) comprises two core components...: (1) assessing the task’s solvability p(ΘI) and p(ΘE), based on the model’s technic and cognitive capabilities, where capability-aware solvability and mission-aware solvability are considered simultaneously
  - [Position: LLMs Need a Bayesian Meta-Reasoning Framework for More Robust and Generalizable Reasoning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yan25g/yan25g.pdf)
- **Confidence estimation** (behaviors tasks)
  > While assessing capability-aware solvability of LLMs is underexplored, confidence or uncertainty estimation (Geng et al., 2024; Wen et al., 2024) offers a viable alternative.
  - [Position: LLMs Need a Bayesian Meta-Reasoning Framework for More Robust and Generalizable Reasoning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yan25g/yan25g.pdf)
- **Overconfidence** (constructs)
  > Overconfidence is a fraction of incorrect answers where the method was confident about self-knowledge reflecting how often the method incorrectly assumes that the model possesses the required knowledge when it does not.
  - [Adaptive Retrieval Without Self-Knowledge? Bringing Uncertainty Back Home](https://aclanthology.org/2025.acl-long.319.pdf)
- **Abstention** (behaviors tasks)
  > To address the critical limitation of RAFT models regarding their inability to abstain from answering when queries fall outside both knowledge boundaries (✘✘), we construct a comprehensive preference dataset that captures the desired behavior for each quadrant. (Section 5)
  - [Divide-Then-Align: Honest Alignment based on the Knowledge Boundary of RAG](https://aclanthology.org/2025.acl-long.561.pdf)
