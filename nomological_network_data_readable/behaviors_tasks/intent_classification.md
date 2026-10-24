# Intent classification
**Type:** Behavior  
**Referenced in:** 29 papers  
**Also known as:** Intent detection, Intention recognition, Intent recognition, Multimodal intent recognition, Intent extraction  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage treats intent classification, often under the names intent detection, intent recognition, or intention recognition, as identifying a user's intent, intention, goal, or purpose from an utterance, text input, or spoken command, usually by assigning one of several predefined intent labels. Several papers explicitly cast it as a multiclass classification problem, and one paper further defines multi-intent detection as a multi-label classification task that outputs a sequence of intent labels. A smaller line of work uses a broader success criterion, defining intent extraction as generating a free-form sentence that describes the inferred user intent from UI interactions.

**Variants.** Papers study this behavior in conversational AI, virtual-assistant, and spoken language understanding settings, often alongside slot filling. Some work shifts the input modality or evidence source, covering multimodal intent recognition from text with video and audio cues, intention recognition from subtle cues in video, and speech-based intent classification. Other variants include identifying unknown intents and extracting intent from screenshots and action logs rather than from a single utterance.

**Space of elicitation and scores.** Papers link intent classification to 8 instruments overall. It is most often measured by BANKING77, CLINC150, SNIPS, ATIS, and MASSIVE, typically described as benchmark datasets, datasets, or corpora for intent tasks. The remaining linked instruments include multimodal and speech benchmarks, and the linked instruments are not exclusively measurement links.

**What it is taken as evidence of.** Construct links are limited. Papers link intent classification to 1 construct, Relational reasoning, and record that connection as related rather than as a causal, correlational, or measurement claim. No other construct link appears, so the available evidence ties this behavior to a single construct framing.

## Sources

**[Towards Automated Error Discovery: A Study in Conversational AI](https://aclanthology.org/2025.emnlp-main.1.pdf) (as "Intent detection")**
> The task of identifying the user's intent from an utterance, used in this paper to assess the generalizability of the error detection method.

**[Comparing Specialised Small and General Large Language Models on Text Classification: 100 Labelled Samples to Achieve Break-Even Performance](https://aclanthology.org/2025.emnlp-main.9.pdf)**
> The task of identifying the user's intention or goal from a spoken or written utterance, typically in a conversational AI context.

**[MultiAgentESC: A LLM-based Multi-Agent Collaboration Framework for Emotional Support Conversation](https://aclanthology.org/2025.emnlp-main.232.pdf) (as "Intention recognition")**
> The observable task of identifying the underlying goal or intent of a user's utterances in a conversation.

**[A Rigorous Evaluation of LLM Data Generation Strategies for Low-Resource Languages](https://aclanthology.org/2025.emnlp-main.418.pdf) (as "Intent recognition")**
> The task of classifying a user's utterance into one of several predefined intents, typically in the context of a virtual assistant.

**[LLM-Guided Semantic Relational Reasoning for Multimodal Intent Recognition](https://aclanthology.org/2025.emnlp-main.1130.pdf) (as "Multimodal intent recognition")**
> Classifying the intent expressed in a multimodal sample using text together with video and audio cues.

**[Small Models, Big Results: Achieving Superior Intent Extraction through Decomposition](https://aclanthology.org/2025.emnlp-main.949.pdf) (as "Intent extraction")**
> Generating a free-form natural language description of the inferred user goal from a sequence of UI interactions, including screenshots and action logs.

## Relationships

### Intent classification →
- **BANKING77** (measurements) — *measured_by*
  > We report top-1 accuracy for finetuning classification tasks on the ... 77-class Banking-77 (B77) (Casanueva et al., 2020).
  - [Tight Clusters Make Specialized Experts](https://proceedings.iclr.cc/paper_files/paper/2025/file/854a9ab0f323b841955e70ca383b27d1-Paper-Conference.pdf)
- **CLINC150** (measurements) — *measured_by*
  > Intent Classification. CLINC150 (mis, 2020) is designed for intent classification, which comprises 150 classes across five domains... (Section 4.1).
  - [On Large Language Model Continual Unlearning](https://proceedings.iclr.cc/paper_files/paper/2025/file/fc28053a08f59fccb48b11f2e31e81c7-Paper-Conference.pdf)
- **SNIPS** (measurements) — *measured_by*
  > We use two intent classification benchmark datasets, ATIS (Hemphill et al., 1990), and SNIPS (Coucke et al., 2018). (Section 3)
  - [Main Predicate and Their Arguments as Explanation Signals For Intent Classification](https://aclanthology.org/2025.naacl-long.539.pdf)
- **SLURP** (measurements) — *measured_by*
  > We evaluate them on three common speech tasks with corresponding common benchmarks: ... intent classification, a standard SLU task, with SLURP (Bastianelli et al., 2020) (Section 4.4).
  - [Joint Fine-tuning and Conversion of Pretrained Speech and Language Models towards Linear Complexity](https://proceedings.iclr.cc/paper_files/paper/2025/file/9b79416c0dc4b09feaa169ed5cdd63d4-Paper-Conference.pdf)
- **ATIS** (measurements) — *measured_by*
  > We use two intent classification benchmark datasets, ATIS (Hemphill et al., 1990), and SNIPS (Coucke et al., 2018). (Section 3)
  - [Main Predicate and Their Arguments as Explanation Signals For Intent Classification](https://aclanthology.org/2025.naacl-long.539.pdf)
- **MASSIVE** (measurements) — *measured_by*
  > For intent recognition, we use MASSIVE (FitzGerald et al., 2023), which is a multilingual dataset for virtual assistant evaluation with intent and slot annotations that supports 51 languages and 60 intents. (Section 3.2)
  - [A Rigorous Evaluation of LLM Data Generation Strategies for Low-Resource Languages](https://aclanthology.org/2025.emnlp-main.418.pdf)
- **MIntRec2.0** (measurements) — *measured_by*
  > MIntRec2.0 is a large-scale dataset with 30 fine-grained intent labels spanning text, video, and audio modalities. (Section 4.1)
  - [LLM-Guided Semantic Relational Reasoning for Multimodal Intent Recognition](https://aclanthology.org/2025.emnlp-main.1130.pdf)

### Associated with
- **Relational reasoning** (constructs)
  > Consequently, there is a need for relational reasoning methods concentrating on fine-grained semantics for multimodal intent recognition... (Introduction)
  - [LLM-Guided Semantic Relational Reasoning for Multimodal Intent Recognition](https://aclanthology.org/2025.emnlp-main.1130.pdf)
