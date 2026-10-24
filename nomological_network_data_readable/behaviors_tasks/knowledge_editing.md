# Knowledge editing
**Type:** Behavior  
**Referenced in:** 29 papers  
**Also known as:** Knowledge erasure, Knowledge update, User-specific editing, Visual entity editing, Visual semantic editing, Model editing, Factual knowledge updating, Hallucination correction, Sequence editing, Sequential editing, Sequential knowledge editing, Fact editing  

## State of the Field

**Space of definitions.** Across the surveyed work, the prevailing usage is a targeted update to a model's stored factual or commonsense knowledge so that, for a specified prompt or input, it returns a new desired answer while unrelated outputs remain unchanged. Most definitions tie this to modifying a small number of parameters, or the model's parameters more generally. One formulation also makes generality, portability, and locality part of the success criteria alongside maximizing the chance of responding with y given x, while a smaller line of work broadens the behavior to targeted model editing of knowledge and capabilities, and another treats it as producing responses consistent with a new or corrected fact provided in context without modifying model weights.

**Variants.** Papers use several subtask names under this behavior. A common split is between knowledge update, where the model should produce a new fact replacing an old one, and knowledge erasure, where it should stop producing a fact after modification; one paper also describes fact editing as changing the object for the same subject-relation pair through weight or activation intervention. Another recurring setting is sequential or lifelong editing, called sequence editing, sequential editing, or sequential knowledge editing, where multiple edits are applied over time and earlier edits may be revisited, while multimodal work distinguishes visual entity editing, visual semantic editing, and user-specific editing; smaller formulations include factual knowledge updating over subject-relation-object triples and hallucination correction.

**Space of elicitation and scores.** Papers link this behavior to 7 measurement instruments, all through measured_by relations. The most frequently linked are ZsRE, CounterFact, SelfCheckGPT, WikiData_counterfact, and LongMemEval, with the remaining links going to other instruments. In the papers' descriptions, ZsRE and CounterFact are representative or widely adopted benchmarks for model or factual knowledge editing, SelfCheckGPT is a hallucination correction dataset, and LongMemEval is a benchmark that includes knowledge update among its tasks.

**What it is taken as evidence of.** Only a small part of the literature explicitly uses this behavior as evidence of another construct. One paper says the success rate of knowledge editing is used to assess context faithfulness, and another construct link connects reversal curse to knowledge editing through a measured_by relation, so papers do not converge on a single construct that this behavior reflects. More often, knowledge editing is related to editing locality, generalization, and generality, with several additional construct links also appearing; one paper also claims a causal relationship from knowledge editing to editing locality.

## Sources

**[Reasons and Solutions for the Decline in Model Performance after Editing](https://proceedings.neurips.cc/paper_files/paper/2024/file/7f588e59e9ae6138d3ea9e4fdaa7e040-Paper-Conference.pdf)**
> Updating a model's stored factual or commonsense knowledge by modifying a small number of parameters.

**[Knowledge Localization: Mission Not Accomplished? Enter Query Localization!](https://proceedings.iclr.cc/paper_files/paper/2025/file/48adb34f7ee39177c4c23a8e4253a492-Paper-Conference.pdf) (as "Knowledge erasure")**
> The observable outcome of a model ceasing to produce a specific fact in response to relevant queries after its parameters have been modified.

**[Knowledge Localization: Mission Not Accomplished? Enter Query Localization!](https://proceedings.iclr.cc/paper_files/paper/2025/file/48adb34f7ee39177c4c23a8e4253a492-Paper-Conference.pdf) (as "Knowledge update")**
> The observable outcome of a model producing a new, updated fact in response to relevant queries after its parameters have been modified to replace an old fact.

**[MMKE-Bench: A Multimodal Editing Benchmark for Diverse Visual Knowledge](https://proceedings.iclr.cc/paper_files/paper/2025/file/01fb6de3360f9e32862665580e2c5853-Paper-Conference.pdf) (as "Visual entity editing")**
> The observable task of modifying a model's knowledge about a specific visual entity, such as updating its attributes or associated facts.

**[MMKE-Bench: A Multimodal Editing Benchmark for Diverse Visual Knowledge](https://proceedings.iclr.cc/paper_files/paper/2025/file/01fb6de3360f9e32862665580e2c5853-Paper-Conference.pdf) (as "Visual semantic editing")**
> The observable task of modifying a model's understanding of complex visual semantics, such as actions, body gestures, or object relationships.

**[MMKE-Bench: A Multimodal Editing Benchmark for Diverse Visual Knowledge](https://proceedings.iclr.cc/paper_files/paper/2025/file/01fb6de3360f9e32862665580e2c5853-Paper-Conference.pdf) (as "User-specific editing")**
> The observable task of incorporating new, personalized user information into a model, such as details about owned items or personal relationships.

**[Efficient Model Editing with Task-Localized Sparse Fine-tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/96f5de31e8e3d19cbcd3a7397b8dce57-Paper-Conference.pdf) (as "Model editing")**
> The general practice of modifying a pre-trained model's parameters to add, remove, or alter its knowledge and capabilities in a targeted manner.

**[LyapLock: Bounded Knowledge Preservation in Sequential Large Language Model Editing](https://aclanthology.org/2025.emnlp-main.327.pdf) (as "Factual knowledge updating")**
> The observable process of modifying model parameters to reflect new factual associations in the form of subject-relation-object triples, such as updating "Beats Music is owned by Apple."

**[Think and Recall: Layer-Level Prompting for Lifelong Model Editing](https://aclanthology.org/2025.emnlp-main.733.pdf) (as "Hallucination correction")**
> Reducing or eliminating factually incorrect statements in model outputs by applying knowledge edits.

**[Reasons and Solutions for the Decline in Model Performance after Editing](https://proceedings.neurips.cc/paper_files/paper/2024/file/7f588e59e9ae6138d3ea9e4fdaa7e040-Paper-Conference.pdf) (as "Sequence editing")**
> Repeatedly applying multiple knowledge edits to the same model over a sequence of samples.

**[MMKE-Bench: A Multimodal Editing Benchmark for Diverse Visual Knowledge](https://proceedings.iclr.cc/paper_files/paper/2025/file/01fb6de3360f9e32862665580e2c5853-Paper-Conference.pdf) (as "Sequential editing")**
> The task of continuously updating a model with multiple, sequential pieces of knowledge and evaluating its ability to retain earlier edits.

**[AlphaEdit: Null-Space Constrained Knowledge Editing for Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/29c8c615b3187ee995029284702d3f43-Paper-Conference.pdf) (as "Sequential knowledge editing")**
> The observable process of applying a series of targeted updates to a model's parameters to modify its stored knowledge over time.

**[Is This the Subspace You Are Looking for? An Interpretability Illusion for Subspace Activation Patching](https://proceedings.iclr.cc/paper_files/paper/2024/file/70b8505ac79e3e131756f793cd80eb8d-Paper-Conference.pdf) (as "Fact editing")**
> Model behavior where a stored fact is modified through weight or activation intervention to change the output from one object to another for the same subject-relation pair.

## Relationships

### Knowledge editing →
- **ZsRE** (measurements) — *measured_by*
  > we edit different kinds of knowledge: WikiDatarecent, WikiDatacounterfact (Cohen et al., 2024), WikiBio (Hartvigsen et al., 2024), ConvSent (Mitchell et al., 2022), and ZsRE (Yao et al., 2023). (Section 3.1)
  - [Unlocking Efficient, Scalable, and Continual Knowledge Editing with Basis-Level Representation Fine-Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/2f89a23a19d1617e7fb16d4f7a049ce2-Paper-Conference.pdf)
- **CounterFact** (measurements) — *measured_by*
  > “We evaluate AlphaEdit using two widely adopted benchmarks: the Counterfact dataset (Meng et al., 2022) and the ZsRE dataset (Levy et al., 2017).”
  - [AlphaEdit: Null-Space Constrained Knowledge Editing for Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/29c8c615b3187ee995029284702d3f43-Paper-Conference.pdf)
- **SelfCheckGPT** (measurements) — *measured_by*
  > “we also evaluate its ability to correct Hallucination in SelfCheckGPT [48].”
  - [WISE: Rethinking the Knowledge Memory for Lifelong Model Editing of Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/60960ad78868fce5c165295fbd895060-Paper-Conference.pdf)
- **Editing locality** (constructs) — *causes*
  > direct editing of long-term memory (ROME, MEMIT, etc.) creates conflicts with prior pretraining knowledge, resulting in poor locality (Section 3.2)
  - [WISE: Rethinking the Knowledge Memory for Lifelong Model Editing of Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/60960ad78868fce5c165295fbd895060-Paper-Conference.pdf)
- **WikiData_counterfact** (measurements) — *measured_by*
  > we edit different kinds of knowledge: WikiDatarecent, WikiDatacounterfact (Cohen et al., 2024), WikiBio (Hartvigsen et al., 2024), ConvSent (Mitchell et al., 2022), and ZsRE (Yao et al., 2023). (Section 3.1)
  - [Unlocking Efficient, Scalable, and Continual Knowledge Editing with Basis-Level Representation Fine-Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/2f89a23a19d1617e7fb16d4f7a049ce2-Paper-Conference.pdf)
- **WikiData_recent** (measurements) — *measured_by*
  > we edit different kinds of knowledge: WikiDatarecent, WikiDatacounterfact (Cohen et al., 2024), WikiBio (Hartvigsen et al., 2024), ConvSent (Mitchell et al., 2022), and ZsRE (Yao et al., 2023). (Section 3.1)
  - [Unlocking Efficient, Scalable, and Continual Knowledge Editing with Basis-Level Representation Fine-Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/2f89a23a19d1617e7fb16d4f7a049ce2-Paper-Conference.pdf)
- **WikiBio** (measurements) — *measured_by*
  > we edit different kinds of knowledge: WikiDatarecent, WikiDatacounterfact (Cohen et al., 2024), WikiBio (Hartvigsen et al., 2024), ConvSent (Mitchell et al., 2022), and ZsRE (Yao et al., 2023). (Section 3.1)
  - [Unlocking Efficient, Scalable, and Continual Knowledge Editing with Basis-Level Representation Fine-Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/2f89a23a19d1617e7fb16d4f7a049ce2-Paper-Conference.pdf)
- **MEMIT** (measurements) — *measured_by*
  > “MEMIT (Meng et al., 2023) uses a low-rank update to the MLPs in the LM to update the knowledge of the model on a specific fact.”
  - [Gumbel Counterfactual Generation From Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/e15790966a4a9d85d688635c88ee6d8a-Paper-Conference.pdf)
- **Editability** (constructs) — *causes*
  > The sequential updates gradually deviate the model from its initial state, leading to degradation in its editability (Ma et al., 2024; Gupta et al., 2024b). (Section 1)
  - [Towards Lifelong Model Editing via Simulating Ideal Editor](https://raw.githubusercontent.com/mlresearch/v267/main/assets/guo25c/guo25c.pdf)
- **Catastrophic forgetting** (behaviors tasks) — *causes*
  > The model typically encounters catastrophic forgetting during sequential edits, where previously edited examples are forgotten (Wang et al., 2024a; Gupta et al., 2024a). (Section 1)
  - [Towards Lifelong Model Editing via Simulating Ideal Editor](https://raw.githubusercontent.com/mlresearch/v267/main/assets/guo25c/guo25c.pdf)
- **Knowledge retention** (constructs) — *causes*
  > the accumulation of preservation loss inevitably erodes model stability during sequential editing operations, ultimately leading to model forgetting and collapse (Section 1).
  - [LyapLock: Bounded Knowledge Preservation in Sequential Large Language Model Editing](https://aclanthology.org/2025.emnlp-main.327.pdf)

### Associated with
- **Generality** (constructs)
  > Knowledge editing seeks to maximize the chance of an LLM responding with y given x, while satisfying the following additional criteria at the same time...: (1) Generality: there are different ways to express US president, wherefore the edited model should generalize. (Section 2.1)
  - [Unlocking Efficient, Scalable, and Continual Knowledge Editing with Basis-Level Representation Fine-Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/2f89a23a19d1617e7fb16d4f7a049ce2-Paper-Conference.pdf)
- **Portability** (constructs)
  > Knowledge editing seeks to maximize the chance of an LLM responding with y given x, while satisfying the following additional criteria at the same time...: (2) Portability: relevant knowledge such as the first lady of United States should be updated as well. (Section 2.1)
  - [Unlocking Efficient, Scalable, and Continual Knowledge Editing with Basis-Level Representation Fine-Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/2f89a23a19d1617e7fb16d4f7a049ce2-Paper-Conference.pdf)
- **Reliability** (constructs)
  > i) reliability, the model can remember both current and previous edits after sequential editing
  - [WISE: Rethinking the Knowledge Memory for Lifelong Model Editing of Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/60960ad78868fce5c165295fbd895060-Paper-Conference.pdf)
- **Linguistic quality** (constructs)
  > “We analyze ICE across four critical aspects of knowledge editing: accuracy, locality, generalization, and linguistic quality, demonstrating its advantages.”
  - [In-Context Editing: Learning Knowledge from Self-Induced Distributions](https://proceedings.iclr.cc/paper_files/paper/2025/file/c0ff9e52e94ae331bc0f2d28be06a9ca-Paper-Conference.pdf)
- **Context faithfulness** (constructs)
  > this paper uses the success rate of KE to assess the context-faithfulness of LLMs (Section 2.2)
  - [Is Factuality Enhancement a Free Lunch For LLMs? Better Factuality Can Lead to Worse Context-Faithfulness](https://proceedings.iclr.cc/paper_files/paper/2025/file/660d0ed5885662219244b6e44aba8fe3-Paper-Conference.pdf)
